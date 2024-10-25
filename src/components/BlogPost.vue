<template>
    <article class="post">
        <h2 class="heading post__title">{{ props.post.title }}</h2>
        <p class="body post__body">{{ props.post.body }}</p>
        <div class="post__action-bar">
            <div class="post__reactions reactions">
                <like-action :count-likes="props.post.reactions.likes"></like-action>
                <trash-action :count-trashes="props.post.reactions.dislikes"></trash-action>
            </div>
            <router-link :to="`/post/${props.post.id}`" class="post__action-link">Open comments</router-link>
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

interface PostProps {
    post: Post,
    publicDate: Date
}

const props = defineProps<PostProps>()
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