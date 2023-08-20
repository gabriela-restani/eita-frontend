<template>
  <div class="user-interests">
    <div class="user-interests__form-wrapper">
      <h1 class="text-h5"> {{ userInterestsForm.title }}</h1>
      <div class="">
        <q-chip
          v-for="(item, index) in userInterestsForm.interests"
          :key="`user-interests-${index}`"
          v-model:selected="userInterests[item]"
          :class="{
            'user-interests__chip--selected': userInterests[item],
          }"
          icon="favorite_border"
          size="lg"
          color="indigo-14"
          :text-color="userInterests[item] ? 'white' : 'indigo-14'"
          :outline="!userInterests[item]"
          square
        >
          {{ item }}
        </q-chip>
      </div>
    </div>

    <q-stepper-navigation class="user-interests__step-nav">
        <q-btn 
          class="user-interests__step-nav__btn"
          label="Finalizar" 
          @click="submitUserInfo" 
        />

        <q-btn 
          flat
          class="user-interests__step-nav__btn user-interests__step-nav__btn--flat q-mt-md"
          label="Voltar" 
          @click="returnStep" 
        />
    </q-stepper-navigation>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import userInterestsForm from '~/assets/data/on-boarding/user-interests-form.json';

const userInterests = ref(getInitialValue());

function getInitialValue() {
  const initialValue = {}; 
  userInterestsForm.interests.forEach((item) => {
    return initialValue[item] = false;
  });

  return initialValue;
}


const selectedValues = computed(() => {
  return Object.keys(userInterests.value)
    .filter((key) => userInterests.value[key] === true);
});

const emit = defineEmits(['finish', 'return']);

function submitUserInfo() {
  emit('finish', { userInterests: selectedValues.value });
}

function returnStep() {
  emit('return');
}
</script>

<style scoped>
.user-interests {
  height: 75vh;
  width: calc(100vw - 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.user-interests__form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
}

.user-interests__item--selected {
  background-color: rgba(48, 79, 254, 0.2);
  border-radius: 8px;
}

.user-interests__step-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
}

.user-interests__step-nav__btn {
  width: 100%;
  background-color: #304FFE;
  color: #fff;
}

.user-interests__step-nav__btn--flat {
  background-color: transparent;
  color: #304FFE;
}

</style>