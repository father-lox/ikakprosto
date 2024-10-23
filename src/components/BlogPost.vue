<template>
    <article>
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
        <div>
            <like-action></like-action>
            <trash-action></trash-action>
            <RouterLink to="/post" class="action-link">Open comments</RouterLink>
            <public-date :date="publicDate" />
            <label-chip v-for="tag in tags" :value="tag"></label-chip>
            
        </div>
    </article>
</template>

<script lang="ts">
import LikeAction from './LikeAction.vue';
import TrashAction from './TrashAction.vue';
import LabelChip from './LabelChip.vue';
import PublicDate from './PublicDate.vue';

export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            required: true,
            type: String,
        },
        body: {
            required: true,
            type: String,
        },
        tags: {
            required: true,
            type: Array<string>
        },
        publicDate: {
            required: true,
            type: Date
        }
    },

    components: { LikeAction, TrashAction, LabelChip, PublicDate }
}
</script>