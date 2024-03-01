<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFetch, type AfterFetchContext } from '@vueuse/core'
import { useRouter } from 'vue-router'

type Data = {
  id: number
  title: string
  image_id: string
  thumbnail: {
    lqip: ''
    width: number
    height: number
    alt_text: string
  }
  imageUrl: string
}

type ArtWork = {
  pagination: {}
  data: Data[]
  info: {}
  config: {
    iiif_url: string
    website_url: string
  }
}

const router = useRouter()
const count = ref(0)
const record = ref<Data[]>([])
const query = ref('')
const isLoading = ref(false)

async function fetchData() {
  isLoading.value = true
  const { data } = await useFetch<ArtWork>(
    `https://api.artic.edu/api/v1/artworks/search?fields=id,title,image_id,thumbnail&q=${query.value}`,
    {
      afterFetch(ctx: AfterFetchContext<string>) {
        const parsed: ArtWork = JSON.parse(ctx.data!)
        parsed.data.forEach((d) => {
          d.imageUrl = `${parsed.config.iiif_url}/${d.image_id}/full/843,/0/default.jpg`
        })
        return parsed
      },
    },
  )
  count.value++
  if (data.value !== null) {
    // @ts-ignore
    record.value = data.value
  }
  isLoading.value = false
}

const moveToDetail = (id: number) => {
  router.push(`/detail/${id}`)
}

onMounted(async () => {
  await fetchData()
})
</script>

<template>
  <div>
    <div>
      <input type="text" v-model="query" class="b-rounded" /><button @click="fetchData" class="m-l-4">search</button>
    </div>
    <div>
      <template v-if="!isLoading">
        <div class="m-4">
          <div v-for="rec in record">
            <div @click="moveToDetail(rec.id)">
              <img :src="rec.imageUrl" />
              <h5>{{ rec.title }}</h5>
              <p>-</p>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div>Loading...</div>
      </template>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 300px;
  height: auto;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
