<template>
  <div class="q-pt-md user-feed">
      <ArticleCard
        v-for="(content, index) in contents"
        :key="`content-${index}`"
        :article="content"
        class="q-mt-md"
        @like="sendInteraction($event, 'like')"
        @dislike="sendInteraction($event, 'dislike')"
      />
  </div>
</template>
<script setup>
import ArticleCard from '~/components/user-feed/article-card';

const { createInteraction } = useServer();

const props = defineProps({
  contents: {
    type: Array,
    required: true,
  },
});

const { userId } = JSON.parse(localStorage.getItem('eita-frontend') ?? '{}');

function sendInteraction(id, action) {
  const params = {
    userId,
    contentId: id,
    classification: action,
  };

  createInteraction(params);
}
</script>

<style scoped>
.user-feed {
  column-count: 2;
  margin: 0 8px;
  width: 96vw;
}
</style>
