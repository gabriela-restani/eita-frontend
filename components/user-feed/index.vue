<template>
  <div class="q-pt-md user-feed">
      <ArticleCard
        v-for="(content, index) in contents"
        :key="`content-${index}`"
        :article="content"
        class="q-mt-md"
        @like="sendInteraction($event, 'Like')"
        @dislike="sendInteraction($event, 'Dislike')"
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

function sendInteraction(id, action) {
  const params = {
    userId: '10',
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
