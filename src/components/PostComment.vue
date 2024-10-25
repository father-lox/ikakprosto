<template>
    <article class="comment">
        <article class="avatar" :class="avatar.length === 0 ? 'avatar_empty' : ''">
            <img class="avatar__image" :src="profilePicture" :alt="avatar.length !== 0 ? `Avatar by ${name}` : ''" />
        </article>
        <div>
            <p class="comment__user-name">{{ name }}</p>
            <p class="body comment__body">{{ isDeleted ? 'This comment has been deleted.' : comment }} <button class="text-underline text-underline_low-opacity text-underline_color-primary comment__return-button" v-if="isDeleted" @click="isDeleted = false">Return</button></p>
            <div class="comment__action-bar">
                <public-date :public-date="date" />
                <button v-if="!isDeleted" @click="isDeleted = true" class="text-underline delete">Delete</button>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import PublicDate from './PublicDate.vue';

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
        },
        avatar: {
            default: '',
        }
    },
    data() {
        return {
            isDeleted: false
        }
    },
    components: { PublicDate }
}
</script>

<style lang="scss">
@use "sass:math";

.delete {
    background: none;
    border: none;
    padding: 0;
    color: var(--color-red);

    &:hover {
        cursor: pointer;
    }

    &::after {
        background: #EB5757;
    }
}

.comment {
    display: flex;
    gap: 8rem;

    &__user-name {
        font-weight: 600;
        font-size: 20rem;
        letter-spacing: -1px;
        line-height: 20rem;
    }

    &__body {
        margin: 12rem 0 0;
    }

    &__action-bar {
        margin: 16rem 0 0;
        display: flex;
        gap: 20rem;
    }

    &__return-button {
        border: none;
        background: none;
        color: var(--color-primary);
        font-size: inherit;
        padding: 0;
        margin: 0;
        cursor: pointer;
        line-height: 75%;
    }
}

.avatar {
    $size: 46rem;

    width: $size;
    height: $size;
    border-radius: math.div($size, 2);
    overflow: hidden;

    outline: 5rem solid var(--color-black-text);
    outline-offset: -6rem;

    &_empty {
        position: relative;

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 8rem;
            background: white;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
}
</style>