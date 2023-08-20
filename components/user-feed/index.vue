<template>
  <div class="q-pt-md user-feed">
      <ArticleCard
        v-for="(article, index) in [article1, article2, article3, article2, article3, article1]"
        :key="`article-${index}`"
        :article="article"
        class="q-mt-md"
      />
  </div>
</template>
<script setup>
import ArticleCard from '~/components/user-feed/article-card';
import { ref } from 'vue';

const article1 = ref({
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
  image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
});

const article2 = ref({
  title: 'Lorem ipsum dolor sit amet.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
  image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
});

const article3 = ref({
  title: 'Lorem ipsum dolor sit amet. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Donec euismod, nisl eget consequat aliquam, odio nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
  image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
});

const articles = ref([
  article1,
  article2,
  article3,
]);
</script>

<style scoped>
.user-feed {
  column-count: 2;
  margin: 0 8px;
  width: 96vw;
}
</style>
