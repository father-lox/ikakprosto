<template>
    <button>
        <slot></slot> {{ name }} {{ count }}
    </button>
</template>

<script lang="ts">
export default {
    props: {
        name: {
            required: true,
            type: String
        },
        count: {
            type: Number,
            default: 0
        }
    }
}
</script>