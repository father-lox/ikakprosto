import { createApp } from 'vue';
import './style.css';
import { createMemoryHistory, createRouter } from 'vue-router';
import App from './App.vue';
import Index from './pages/Index.vue';
import Post from './pages/Post.vue';


const routes = [
  { path: '/', component: Index },
  { path: '/post', component: Post },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
