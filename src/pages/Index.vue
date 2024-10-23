<script setup lang="ts">
import BlogPost from '../components/BlogPost.vue';
import { usePostsStore } from '../stores/posts';

const postStore = usePostsStore()
postStore.loadAll()
</script>

<template>
  <blog-post v-for="post in postStore.getFirstFive"  
    :post="post"
    :public-date="new Date()"
  />
</template>

<style scoped></style>
