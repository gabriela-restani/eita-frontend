<template>
  <div class="user-register">
    <div class="user-register__form-wrapper">
      <h1 class="text-h5"> Vamos começar! Como você se chama? </h1>
      <q-input 
        outlined 
        v-model="userName" 
        name="userName"
        type="text"
        label="Seu nome" 
      />
    </div>

    <q-stepper-navigation class="user-register__step-nav">
        <q-btn 
          class="user-register__step-nav__btn"
          color="deep-orange" 
          label="Continue" 
          @click="submitUserInfo" 
        />

        <div class="user-register__step-nav__btn--reserved"/>
    </q-stepper-navigation>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const userName = ref('');

const emit = defineEmits(['submit']);

function submitUserInfo() {
  const userInfo = {
    name: userName.value,
  };

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
}

.user-register__step-nav__btn--reserved {
  height: 3rem;
}
</style>