<template>
    <span class="caption public-date">{{ choseDateFormate() }}</span>
</template>

<script lang="ts">
import {millisecondsInDay} from '../constants'

export default {
    props: {
        publicDate: {
            required: true,
            type: Date
        }
    },
    methods: {
        choseDateFormate(): string {
            const differenceBetweenCurrentAndPublicTime = Date.now() - this.publicDate.getTime()
            const isToday = differenceBetweenCurrentAndPublicTime <= millisecondsInDay
            const isYesterday = differenceBetweenCurrentAndPublicTime > millisecondsInDay && differenceBetweenCurrentAndPublicTime <= millisecondsInDay * 2

            if (isToday) {
                return 'Today'
            } else if (isYesterday) {
                return 'Yesterday'
            } else {
                return this.publicDate.toLocaleDateString()
            }
        }
    }
}
</script>

<style lang="scss">
.public-date {
    color: var(--color-dangerous-robot);
}
</style>
