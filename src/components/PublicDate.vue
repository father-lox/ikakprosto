<template>
    <span>{{ date.toLocaleDateString('ru') }}</span>
</template>

<script lang="ts">
export default {
    props: {
        date: {
            required: true,
            type: Date
        }
    }
}
</script>