<template>
    <page>
        <blog-post v-if="post" :post="post" :public-date="new Date()" />
        <section class="comment-section">
            <h3 class="heading">{{ comments.length }} comments</h3>
            <div class="comment-section__list">
                <post-comment v-for="comment in comments" :date="new Date()" :comment="comment" />
            </div>
        </section>
    </page>
</template>

<script setup lang="ts">
import BlogPost from '../components/BlogPost.vue'
import PostComment from '../components/PostComment.vue'
import { usePostsStore } from '../stores/posts';
import { useLocalCommentsStore } from '../stores/local-comments'
import { onMounted, ref } from 'vue';
import Post from '../types/post';
import UserComment from '../types/user-comment';
import Page from '../components/Page.vue';

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const postsStore = usePostsStore()
const post = ref<Post | null>(null)

const commentsStore = useLocalCommentsStore()
const comments = ref<UserComment[]>([])

onMounted(async () => {
    post.value = await postsStore.loadByID(Number.parseInt(props.id))
    comments.value = (await commentsStore.loadAllCommentsByPost(Number.parseInt(props.id))).filter(userComment => {
        return !commentsStore.isDeleted(userComment)
    })
});

</script>

<style lang="scss">
.comment-section {
    margin: 42rem 0 0;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 24rem;
        margin: 24rem 0 0;
    }
}
</style>