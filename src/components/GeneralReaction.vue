<template>
    <button :active="active" :class="`reaction ${active ? 'reaction_active' : ''}`">
        <div class="reaction__icon reaction__stroke-icon">
            <slot name="stroke-icon"></slot>
        </div>
        <div class="reaction__icon reaction__fill-icon">
            <slot name="fill-icon"></slot>
        </div>
        <span class="caption reaction__name">{{ name }}</span>
        <span class="number reaction__count">{{ count }}</span>
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
        },
        active: {
            default: false,
        },
    },
}
</script>

<style scoped lang="scss">
.reaction {
    display: flex;
    align-items: center;
    border: none;
    background: #f9f9fa;
    padding: 8rem;

    &_active {
        color: var(--color-white);

        .reaction__icon {
            fill: var(--color-white)
        }

        &:not(:hover) {
            .reaction__stroke-icon {
                display: none;
            }
        }
        
        &:hover {
            .reaction__fill-icon {
                display: none;
            }
        }
    }

    &:not(&_active) {
        .reaction__icon {
            fill: var(--color-black)
        }

        &:hover {
            .reaction__stroke-icon {
                display: none;
            }
        }

        &:not(:hover) {
            .reaction__fill-icon {
                display: none;
            }
        }
    }

    &:hover {
        cursor: pointer;
    }

    &__icon {
        width: 13rem;
        fill: var(--color-black);
    }

    &__name {
        margin: 0 0 0 4rem
    }

    &__count {
        color: #adadad;
        margin: 0 0 0 6rem;
    }
}
</style>