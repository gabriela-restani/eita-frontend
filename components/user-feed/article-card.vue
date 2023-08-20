<template>
  <q-card 
    class="article-card cursor-pointer"
    :class="{ 'article-card--course': props.article.kind === 'course'}"
    role="link"
    :aria-label="`Leia sobre ${ article.title }`"
    tabindex="0"
    @click="goToArticlePage(article.slug)"
  >
    <q-card-section class="article-card__header">
      <q-img
        v-if="props.article.kind === 'post'"
        :src="props.article.image"
        :alt="article.title"
        class="user-feed-article-card__image"
      />
      <q-card-actions vertical class="article-card__actions" v-if="props.article.kind === 'post'">
        <q-btn
          flat
          round
          dense
          icon="thumb_up"
          class="article-card__action"
          :class="{ 'article-card__action--liked': interaction === 'like' }"
          arial-label="Gostei"
          @click.stop="handleInteraction('like')"
        />
        <q-btn
          flat
          round
          dense
          icon="thumb_down"
          class="article-card__action"
          :class="{ 'article-card__action--disliked': interaction === 'dislike' }"
          aria-label="Não gostei"
          @click.stop="handleInteraction('dislike')"
        />
        <q-btn
          flat
          round
          dense
          icon="share"
          class="article-card__action"
          aria-label="Compartilhar"
          @click.stop="sharePost(article)"
        />
      </q-card-actions>
    </q-card-section>
    <q-card-section>
      <h3 class="q-mt-sm article-card__title">
        {{ article.title }}
      </h3>
      <p class=" q-mt-sm article-card__content">
        {{ article.body }}
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

const emit = defineEmits(['like', 'dislike']);
const interaction = ref(null);

function interact(id, event) {
  emit(event, id);
}

function goToArticlePage(slug) {
  let target = `https://querobolsa.com.br/revista/${ slug }`;

  if (props.article.kind === 'course') {
    const searchParams = new URLSearchParams({
      c: props.article.title,
    });
    target = 'https://querobolsa.com.br/busca-cursos/resultados?' + searchParams;
  } 

  const hasAParentLinkOrParentButton = event?.path?.some(element => (
    ['A', 'BUTTON'].includes(element?.tagName)
  ));

  if (!hasAParentLinkOrParentButton) {
    window.open(target);
  }
}

function handleInteraction(newInteraction) {
  interaction.value = newInteraction;
  interact(props.article.id, newInteraction)
}
</script>

<style scoped>
.article-card {
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  display: inline-block;
  margin: 8px auto;
  border-radius: 8px;
  height: fit-content;
  width: 100%;
}

.article-card--course {
  background-color: #e3f2fd;
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

.user-feed-article-card__image {
  background-color: hsl(200, 20%, 95%);
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }


.article-card__actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-card__action--liked {
  color: var(--q-positive);
}

.article-card__action--disliked {
  color: var(--q-negative);
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