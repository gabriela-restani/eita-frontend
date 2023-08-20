<template>
  <q-card 
    class="article-card cursor-pointer"
    role="link"
    :aria-label="`Leia sobre ${ article.title }`"
    tabindex="0"
  >
    <q-card-section class="article-card__header">
      <q-img
        :src="article.image"
        :alt="article.title"
        class="user-feed-article-card__image"
      />
      <q-card-actions vertical class="article-card__actions">
        <q-btn
          flat
          round
          dense
          icon="thumb_up"
          class="article-card__action"
          arial-label="Gostei"
        />
        <q-btn
          flat
          round
          dense
          icon="thumb_down"
          class="article-card__action"
          aria-label="Não gostei"
        />
        <q-btn
          flat
          round
          dense
          icon="share"
          class="article-card__action"
          aria-label="Compartilhar"
        />
      </q-card-actions>
    </q-card-section>
    <q-card-section>
      <h3 class="q-mt-sm article-card__title">
        {{ article.title }}
      </h3>
      <p class=" q-mt-sm article-card__content">
        {{ article.description }}
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup>

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped>
.article-card {
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  display: inline-block;
  margin: 8px auto;
  border-radius: 8px;
  height: fit-content;
}

.article-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

.article-card__header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
}

.article-card__image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.article-card__actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-card__title {
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
  margin: 0;
  padding: 0;
}

.article-card__content {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  hyphens: auto;
  -webkit-line-clamp: 3;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  word-break: break-word;
}
</style>