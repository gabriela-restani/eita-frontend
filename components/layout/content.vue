<template>
  <q-page-container>
    <q-page>
      <slot />
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page>
  </q-page-container>
</template>