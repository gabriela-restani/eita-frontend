<template>
  <div class="user-moment">
    <div class="user-moment__form-wrapper">
      <h1 class="text-h5"> {{ userMomentForm.title }}</h1>
      <q-list>
        <q-item 
          v-for="(checkbox, index) in userMomentForm.checkboxValues"
          :key="`user-moment-input-${index}`"
          v-ripple
          :class="{
            'q-mt-md': true,
            'q-pl-none': true,
            'user-moment__item--selected': includesValue(checkbox.value),
          }"
          tag="label"
        >
          <q-item-section avatar top>
            <q-checkbox v-model="userMoments" :val="checkbox.value" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ checkbox.label }}</q-item-label>
            <q-item-label caption>{{ checkbox.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <q-stepper-navigation class="user-moment__step-nav">
        <q-btn 
          class="user-moment__step-nav__btn"
          label="Continue" 
          @click="submitUserInfo" 
        />

        <q-btn 
          flat
          class="user-moment__step-nav__btn user-moment__step-nav__btn--flat q-mt-md"
          label="Voltar" 
          @click="returnStep" 
        />
    </q-stepper-navigation>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import userMomentForm from '~/assets/data/on-boarding/user-moment-form.json';

const userMoments = ref([]);

const includesValue = (value) => {
  return userMoments.value.includes(value);
};

const emit = defineEmits(['submit', 'return']);

function submitUserInfo() {
  emit('submit', { userMoments: [...userMoments.value] });
}

function returnStep() {
  emit('return');
}
</script>

<style scoped>
.user-moment {
  height: 75vh;
  width: calc(100vw - 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.user-moment__form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
}

.user-moment__item--selected {
  background-color: rgba(48, 79, 254, 0.2);
  border-radius: 8px;
}

.user-moment__step-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
}

.user-moment__step-nav__btn {
  width: 100%;
  background-color: #304FFE;
  color: #fff;
}

.user-moment__step-nav__btn--flat {
  background-color: transparent;
  color: #304FFE;
}

</style>