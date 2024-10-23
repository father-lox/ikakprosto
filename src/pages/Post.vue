<template>
  <BlogPost title="His mother had always taught him" :id="1" :tags="['history', 'american', 'crime']"
    :public-date="new Date()"
    body="His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind." />

    <post-comment v-for="comment in comments" :date="comment.publicDate" :comment="comment.text" :name="comment.name"  />
</template>

<script lang="ts">
import BlogPost from '../components/BlogPost.vue';
import PostComment from '../components/PostComment.vue';

export default {
  components: { BlogPost, PostComment },
  data() {
    return {
        comments: [
            {
                name: 'Stas',
                text: 'His mother had always taught him',
                publicDate: new Date()
            },
            {
                name: 'Stas',
                text: 'His mother had always taught him',
                publicDate: new Date()
            },
            {
                name: 'Stas',
                text: 'His mother had always taught him',
                publicDate: new Date()
            },
            {
                name: 'Stas',
                text: 'His mother had always taught him',
                publicDate: new Date()
            }
        ]
    }
  }
}
</script>
