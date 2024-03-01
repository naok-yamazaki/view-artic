<script setup lang="ts">
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const router = useRoute()
const record = ref()
const id = ref()
const title = ref('')
const imageUrl = ref('')
const artistTitle = ref('')
const isLoading = ref(false)
const disp = ref('')

async function fetchData() {
  const { data } = await useFetch(`https://api.artic.edu/api/v1/artworks/${router.params.id}`)
  if (data.value !== null) {
    // @ts-ignore
    record.value = JSON.parse(data.value)
  }
}

onMounted(async () => {
  isLoading.value = false
  await fetchData()
  id.value = record.value.data.id
  title.value = record.value.data.title
  imageUrl.value = `${record.value.config.iiif_url}/${record.value.data.image_id}/full/843,/0/default.jpg`
  artistTitle.value = record.value.data.artist_title
  disp.value = record.value.data.description
  isLoading.value = true
})
</script>

<template>
  <div>
    <template v-if="isLoading">
      <div>
        <router-link to="/"> Back </router-link>
      </div>
      <p>ID: {{ id }}</p>
      <p class="font-italic">Title: {{ title }}</p>
      <p>Artist: {{ artistTitle }}</p>
      <p>
        <img :src="imageUrl" class="h-auto w-xl" />
      </p>
      <p class="text-left">{{ disp }}</p>
    </template>
    <template v-else> Loading... </template>
  </div>
</template>
