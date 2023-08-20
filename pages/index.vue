<template>
  <OnBoarding />
</template>
<script setup>
import Home from '~/components/home';
import OnBoarding from '~/components/on-boarding/on-boarding';
import { onMounted } from 'vue';
import { StorageSerializers, useStorage } from '@vueuse/core';
</script>