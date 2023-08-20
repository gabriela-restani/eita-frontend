<template>
  <OnBoarding />
</template>
<script setup>
import Home from '~/components/home';
import OnBoarding from '~/components/on-boarding/on-boarding';
import { onMounted } from 'vue';
import { StorageSerializers, useStorage } from '@vueuse/core';

onMounted(() => {
  const storage = useStorage('eita-frontend', null, undefined, { serializer: StorageSerializers.object }); 
  storage.value.interests = ['Vue', 'Nuxt', 'Quasar'];
  storage.value.user = { name: 'John Doe', age: 30 };
});
</script>