<script setup lang="ts">
import BlogPost from '../components/BlogPost.vue';
import { usePostsStore } from '../stores/posts';
import SiteName from '../components/SiteName.vue';

const postStore = usePostsStore()
postStore.loadAll()
</script>

<template>
  <div class="site-wrapper">
    <header class="header">
      <site-name></site-name>
    </header>
    <main class="content">
      <blog-post v-for="post in postStore.getFirstFive" :post="post" :public-date="new Date()" />
    </main>
  </div>
</template>

<style lang="scss">
.site-wrapper {
  padding: 16rem 32rem 60rem;
}

.header {
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 32rem;
  max-width: 676rem;
  margin: 58rem auto 0;
}
</style>
