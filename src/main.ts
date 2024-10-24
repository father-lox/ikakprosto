import { createApp } from 'vue';
import './style.css';
import './styles/_global.scss'
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import Index from './pages/Index.vue';
import Post from './pages/Post.vue';
import { createPinia } from 'pinia'

const routes = [
  { path: '/', component: Index },
  { path: '/post/:id', component: Post, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
