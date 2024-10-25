import { createApp } from 'vue';
import './style.css';
import './styles/_global.scss'
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import Index from './pages/Index.vue';
import Post from './pages/Post.vue';
import { createPinia } from 'pinia'
import { urlPathTemplates } from './constants';

const routes = [
  { path: urlPathTemplates.root, component: Index },
  { path: urlPathTemplates.post, component: Post, props: true },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
