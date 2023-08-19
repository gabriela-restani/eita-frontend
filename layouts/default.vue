<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 100vh" >
      <PageHeader />
      <PageContent>
        <slot />
      </PageContent>
    </q-layout>
  </div>
</template>
<script setup>
import PageHeader from '~/components/layout/header';
import PageContent from '~/components/layout/content';
</script>