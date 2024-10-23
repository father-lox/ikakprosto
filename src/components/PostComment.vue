<template>
    <article>
        <img :src="profilePicture" alt="Profile Picture"/>
        <p>{{ name }}</p>
        <p>{{ comment }}</p>
        <span>{{ date.toLocaleDateString('ru') }}</span>
        <button>Delete</button>
    </article>
</template>

<script lang="ts">
export default {
    props: {
        profilePicture: {
            type: String
        },
        name: {
            required: true,
            type: String
        },
        comment: {
            required: true,
            type: String
        },
        date: {
            required: true,
            type: Date
        }
    }
}
</script>