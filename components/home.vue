<template>
  <div>
    Hello World!
  </div>
  <q-circular-progress
      :value="value"
      size="90px"
      :thickness="0.2"
      color="orange"
      center-color="grey-8"
      track-color="transparent"
      class="q-ma-md"
    />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
</script>

<style lang="scss" scoped>

</style>