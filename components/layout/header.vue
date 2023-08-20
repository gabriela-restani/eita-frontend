<template>
  <q-header reveal class="header">
    <q-toolbar>
      <q-avatar>
        <img src="https://play-lh.googleusercontent.com/41ttGHgQv8WsGC2azrcgjLa-NbKUwUeNb63wddCB-cV39xbaaZ6vG-ONVmGbN_K8OsYV=w480-h960">
      </q-avatar>

      <q-toolbar-title>
        QueroLink
      </q-toolbar-title>

      <q-btn flat round dense icon="account_circle" size="lg" @click="handleAvatarClick"/>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
const { recalculateUserInterests } = useServer();

function handleAvatarClick() {
  console.log('handleAvatarClick');
  const { userId } = JSON.parse(localStorage.getItem('eita-frontend') ?? '{}');
  recalculateUserInterests({ userId });
}
</script>

<style scoped>
.header {
  background-color: #304FFE;
  color: white;
}
</style>