<template>
    <blog-post v-if="post" :post="post" :public-date="new Date()" />

    <post-comment v-for="comment in comments" :date="new Date()" :comment="comment.body" :name="comment.user.fullName" />
</template>

<script setup lang="ts">
import BlogPost from '../components/BlogPost.vue'
import PostComment from '../components/PostComment.vue'
import { usePostsStore } from '../stores/posts';
import { useCommentsStore } from '../stores/comments'
import { onMounted, ref } from 'vue';
import Post from '../types/post';
import UserComment from '../types/user-comment';

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const postsStore = usePostsStore()
const post = ref<Post | null>(null)

const commentsStore = useCommentsStore()
const comments = ref<UserComment[]>([])

onMounted(async () => {
    post.value = await postsStore.loadByID(Number.parseInt(props.id))
    comments.value = await commentsStore.loadAllCommentsByPost(Number.parseInt(props.id))
});

</script>
