<template>
  <div class="user-register">
    <div class="user-register__form-wrapper">
      <h1 class="text-h5"> {{ userRegisterForm.title }} </h1>
      <q-input 
        outlined 
        v-for="(input, key) in userRegisterForm.inputs"
        :key="`user-register-input-${key}`"
        v-model="userInfo[key]" 
        :name="input.name"
        :type="input.type"
        :label="input.label" 
      />
    </div>

    <q-stepper-navigation class="user-register__step-nav">
        <q-btn 
          class="user-register__step-nav__btn"
          label="Continue" 
          @click="submitUserInfo" 
        />

        <div class="user-register__step-nav__btn--reserved"/>
    </q-stepper-navigation>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import userRegisterForm from '~/assets/data/on-boarding/user-register-form.json'

const userName = ref('');

const emit = defineEmits(['submit']);

const userInfo = ref({
  name: '',
});


function submitUserInfo() {
  emit('submit', userInfo);
}
</script>

<style scoped>
.user-register {
  height: 75vh;
  width: calc(100vw - 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}

.user-register__form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
}

.user-register__step-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
}

.user-register__step-nav__btn {
  width: 100%;
  background-color: #304FFE;
  color: #fff;
}

.user-register__step-nav__btn--reserved {
  height: 3rem;
}
</style>