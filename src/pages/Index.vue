<script lang="ts">
import BlogPost from '../components/BlogPost.vue';

export default {
  components: { BlogPost }
}
</script>

<template>
  <BlogPost title="His mother had always taught him" :id="1" :tags="['history', 'american', 'crime']"
    :public-date="new Date()"
    body="His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind." />
</template>

<style scoped></style>
