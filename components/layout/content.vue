<template>
  <q-page-container>
    <q-page>
      <slot />
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" class="content__button" />
      </q-page-scroller>
    </q-page>
  </q-page-container>
</template>

<style scoped>
.content__button {
  background-color: #304FFE;
  color: white;
}
</style>