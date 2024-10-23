<template>
    <general-reaction name="Trash" :count="countTrashes">
        <trash-icon></trash-icon>
    </general-reaction>
</template>

<script lang="ts">
import TrashIcon from '../icons/TrashIcon.vue';
import GeneralReaction from './GeneralReaction.vue';

export default {
    props: {
        countTrashes: {
            type: Number,
            required: true
        }
    },

    components: { GeneralReaction, TrashIcon }
}
</script>