<template>
  <q-stepper
    v-model="currentStep"
    ref="stepper"
    contracted
    color="primary"
    animated
    class="on-boarding__stepper"
  >
    <q-step
      v-for="(step, key) in steps"
      :key="`on-boarding-step-${key}`"
      :name="step.name"
      :prefix="step.prefix"
      :title="step.title"
      class="on-boarding__step"
    >
      <component 
        :is="getComponent(key)"
        @submit="handleStepSubmit($event)"
        @finish="submitUserInfo($event)"
        @return="stepper.previous()"
      />
    </q-step>
  </q-stepper>
</template>
<script setup>
import UserRegister from '~/components/on-boarding/user-register';
import UserMoment from '~/components/on-boarding/user-moment';
import UserInterests from '~/components/on-boarding/user-interests';
import onboardingSteps from '~/assets/data/on-boarding/steps.json';
import { ref, computed } from 'vue';

const { steps } = onboardingSteps;

const currentStep = ref(1);

const totalSteps = computed(() => Object.keys(steps).length);

const userInfo = ref({});

const stepper = ref(null);

const ON_BOARDING_COMPONENTS = Object.freeze({
  'userRegister': UserRegister,
  'userMoment': UserMoment,
  'userInterests': UserInterests,
});

const currentStepComponent = computed(() => getComponent(steps[currentStep.value].key));

function getComponent(key) {
  return ON_BOARDING_COMPONENTS[key];
}

function handleStepSubmit(data) {
  console.log(data);
  userInfo.value = { ...userInfo.value, ...data };
  if (currentStep.value < totalSteps.value) {
    stepper.value.next();
    return;
  }
}

async function submitUserInfo(data) {
  userInfo.value = { ...userInfo.value, ...data };

  const { data: dataServer } = await useServer().createUser({
    name: userInfo.value.userName,
    interests: userInfo.value.userInterests,
  });

  const payload = { userId: dataServer.value.id };
  localStorage.setItem('eita-frontend', JSON.stringify(payload));

  useRouter().push('/feed');
}


</script>
<style scoped>
.on-boarding__stepper {
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 94vh; */
}

.on-boarding__step {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}

.on-boarding__step-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
}

:v-deep .q-stepper__step-content {
  width: 100%;
}
</style>
