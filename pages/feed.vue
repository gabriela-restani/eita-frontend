<template>
  <UserFeed :contents="contents" />
</template>

<script setup lang="ts">
import UserFeed from '~/components/user-feed/index.vue';
const { createInteraction, recalculateUserInterests, getFeed } = useServer();


const { userId } = JSON.parse(localStorage.getItem('eita-frontend') ?? '{}');

console.log({ userId })

const { data } = await getFeed({ userId });

const contents = data.value.contents;
</script>
