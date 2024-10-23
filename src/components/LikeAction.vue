<template>
    <general-reaction name="Like" :count="countLikes">
        <heart-icon></heart-icon>
    </general-reaction>
</template>

<script lang="ts">
import HeartIcon from '../icons/HeardIcon.vue';
import GeneralReaction from './GeneralReaction.vue';

export default {
    props: {
        countLikes: {
            type: Number,
            required: true,
        }
    },

    components: { GeneralReaction, HeartIcon }
}
</script>