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

  <p v-for="n in 100" :key="`p-${n}`">
    Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
  </p>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
</script>

<style lang="scss" scoped>
</style>