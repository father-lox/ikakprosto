<template>
    <article class="post">
        <h2 class="heading post__title">{{ props.post.title }}</h2>
        <p class="body post__body">{{ props.post.body }}</p>
        <div class="post__action-bar">
            <div class="post__reactions reactions">
                <like-action @click="likePost" :active="isPostLiked" :count-likes="props.post.reactions.likes"></like-action>
                <trash-action @click="dislikePost" :active="isPostDisliked" :count-trashes="props.post.reactions.dislikes"></trash-action>
            </div>
            <router-link v-if="!isPostPage" :to="`/post/${props.post.id}`" class="text-underline text-underline_low-opacity text-underline_color-primary post__action-link">Open comments</router-link>
            <public-date :public-date="props.publicDate" />
            <div class="post__tags">
                <label-chip v-for="(tag, index) in props.post.tags" :value="tag" :is-first="index === 0"></label-chip>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import LikeAction from './LikeAction.vue';
import TrashAction from './TrashAction.vue';
import LabelChip from './LabelChip.vue';
import PublicDate from './PublicDate.vue';
import Post from '../types/post';
import { useRoute } from 'vue-router';
import { urlPathTemplates } from '../constants';
import { useReactions } from '../stores/reactions';
import Reactions from '../types/reactions';
import { ref } from 'vue';

interface PostProps {
    post: Post,
    publicDate: Date,
}

const reactions = useReactions()
const route = useRoute()
const props = defineProps<PostProps>()
const currentReaction = reactions.getByPostID(props.post.id)?.reaction

const isPostPage = route.matched.findIndex(url => url.path === urlPathTemplates.post) > -1;
const isPostLiked = ref<boolean>(currentReaction === Reactions.LIKE);
const isPostDisliked = ref<boolean>(currentReaction === Reactions.DISLIKE);

const likePost = () => {
    if (isPostDisliked.value) {
        props.post.reactions.dislikes--
    }

    if (!isPostLiked.value) {
        reactions.toLike(props.post.id)
        isPostLiked.value = true;
        isPostDisliked.value = false;
        props.post.reactions.likes++
    } else {
        isPostLiked.value = false;
        props.post.reactions.likes--
    }
}

const dislikePost = () => {
    if (isPostLiked.value) {
        props.post.reactions.likes--
    }

    if (!isPostDisliked.value) {
        reactions.toDislike(props.post.id)
        isPostDisliked.value = true
        isPostLiked.value = false
        props.post.reactions.dislikes++
    } else {
        isPostDisliked.value = false
        props.post.reactions.dislikes--
    }
}
</script>

<style lang="scss">
.post {
    &__title {
        margin: 0 0 16rem;
    }

    &__action-bar {
        display: inline-flex;
        align-items: center;
        gap: 8rem;
        margin: 24rem 0 0;
    }

    &__action-link {
        color: var(--color-primary);
        text-decoration: none;
    }

    &__tags {
        display: inline-flex;
        gap: 4rem;
    }
}

.reactions {
    display: inline-flex;
    border-radius: 50rem;
    width: fit-content;
    overflow: hidden;
    gap: 1rem;
}
</style>