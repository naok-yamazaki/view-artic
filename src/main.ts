import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import { createRouter, createWebHistory } from 'vue-router'

import ArtWorksVue from './components/ArtWorks.vue'
import ArtWorkVue from './components/ArtWork.vue'

const routes = [
  { path: '/', component: ArtWorksVue },
  { path: '/detail/:id', component: ArtWorkVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
