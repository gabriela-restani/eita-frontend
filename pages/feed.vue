<template>
  <div>
    <q-btn
      color="purple"
      label="Recalcular"
      @click="recalculateUserInterests({ userId })"
    />

    <q-card
      class="my-card"
      v-for="item in contents"
      :key="item.id"
    >
      <q-card-section>
        {{ item.title }}
      </q-card-section>

      <q-separator dark inset />
      
      <q-card-section>
        <q-btn
          color="primary"
          label="Like"
          @click="createInteraction({ userId, contentId: item.id, classification: 'Like' })"
        />
        
        <q-btn
          color="deep-orange"
          label="Dislike"
          @click="createInteraction({ userId, contentId: item.id, classification: 'Dislike' })"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
const { createInteraction, recalculateUserInterests, getFeed } = useServer();


const { userId } = JSON.parse(localStorage.getItem('eita-frontend') ?? '{}');

console.log({ userId })

const { data } = await getFeed({
  userId
});

const contents = data.value.contents;
</script>
