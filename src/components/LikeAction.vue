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
            default: 0
        }
    },

    components: { GeneralReaction, HeartIcon }
}
</script>