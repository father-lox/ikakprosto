<script setup lang="ts">
import BlogPost from '../components/BlogPost.vue';
import { usePostsStore } from '../stores/posts';
import PageVue from '../components/Page.vue';
const postStore = usePostsStore()
postStore.loadAll()
</script>

<template>
  <page-vue>
    <div class="posts">
      <blog-post v-for="post in postStore.getFirstFive" :post="post" :public-date="new Date()" />
    </div>
  </page-vue>
</template>

<style lang="scss">
.posts {
  display: flex;
  flex-direction: column;
  gap: 32rem;
}
</style>
