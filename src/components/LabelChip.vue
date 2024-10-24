<template>
    <span :class="`caption label-chip ${isFirst ? 'label-chip_tail' : ''}`">{{ value }}</span>
</template>

<script lang="ts">
export default {
    props: {
        value: {
            required: true,
            type: String,
        },
        isFirst: {
            default: false,
        }
    }
}
</script>

<style lang="scss">
$width-tail: 13rem;
$border-radius: 3rem;

.label-chip {
    background: var(--color-chefs-hat);
    
    &:not(.label-chip_tail) {
        padding: 4rem;
        border-radius: $border-radius;
    }
    
    &.label-chip_tail {
        position: relative;
        padding: 4rem 4rem 4rem 0;
        margin: 0 0 0 $width-tail;
        border-radius: 0 $border-radius $border-radius 0;
    }

    &_tail {
        &::before {
            content: url('../assets/label-tail.svg');
            display: block;
            width: $width-tail;
            height: 100%;
            position: absolute;
            top: 0;
            left: -$width-tail;
        }
    }
}
</style>