<template>
    <div class="site-wrapper">
        <header class="header">
            <site-name></site-name>
        </header>
        <main class="content">
            <slot></slot>
        </main>
    </div>
</template>

<script setup lang="ts">
import SiteName from './SiteName.vue';
</script>

<style lang="scss">
.site-wrapper {
  padding: 16rem 32rem 60rem;
  max-width: 676rem;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: center;
  margin: 0 0 58rem;
}
</style>