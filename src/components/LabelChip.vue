<template>
    <span>{{ value }}</span>
</template>

<script lang="ts">
export default {
    props: {
        value: {
            required: true,
            type: String,
        }
    }
}
</script>