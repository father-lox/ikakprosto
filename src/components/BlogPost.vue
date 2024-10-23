<template>
    <article>
        <h2>{{ props.post.title }}</h2>
        <p>{{ props.post.body }}</p>
        <div>
            <like-action :count-likes="props.post.reactions.likes"></like-action>
            <trash-action :count-trashes="props.post.reactions.dislikes"></trash-action>
            <router-link :to="`/post/${props.post.id}`" class="action-link">Open comments</router-link>
            <public-date :date="props.publicDate" />
            <label-chip v-for="tag in props.post.tags" :value="tag"></label-chip>
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
