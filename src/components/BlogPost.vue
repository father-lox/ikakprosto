<template>
    <article class="post">
        <h2 class="heading post__title">{{ props.post.title }}</h2>
        <p class="body post__body">{{ props.post.body }}</p>
        <div class="post__action-bar">
            <div class="post__reactions reactions">
                <like-action @click="likePost" :active="isPostLiked" :count-likes="countsReaction.likes"></like-action>
                <trash-action @click="dislikePost" :active="isPostDisliked" :count-trashes="countsReaction.dislikes"></trash-action>
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
import { useLocalReactions } from '../stores/local-reactions';
import Reactions from '../types/reactions';
import { ref } from 'vue';

interface PostProps {
    post: Post,
    publicDate: Date,
}

const reactions = useLocalReactions()
const route = useRoute()
const props = defineProps<PostProps>()
const reactionInfo = reactions.getByPostID(props.post.id)
const countsReaction = ref(reactionInfo ? reactionInfo.counts : props.post.reactions)

const isPostPage = route.matched.findIndex(url => url.path === urlPathTemplates.post) > -1;
const isPostLiked = ref<boolean>(reactionInfo?.reaction === Reactions.LIKE);
const isPostDisliked = ref<boolean>(reactionInfo?.reaction === Reactions.DISLIKE);

const likePost = () => {
    if (isPostDisliked.value) {
        countsReaction.value.dislikes--
    }

    if (!isPostLiked.value) {
        reactions.toLike(props.post.id, countsReaction.value)
        isPostLiked.value = true;
        isPostDisliked.value = false;
        countsReaction.value.likes++
    } else {
        isPostLiked.value = false;
        countsReaction.value.likes--
    }
}

const dislikePost = () => {
    if (isPostLiked.value) {
        countsReaction.value.likes--
    }

    if (!isPostDisliked.value) {
        reactions.toDislike(props.post.id, countsReaction.value)
        isPostDisliked.value = true
        isPostLiked.value = false
        countsReaction.value.dislikes++
    } else {
        isPostDisliked.value = false
        countsReaction.value.dislikes--
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