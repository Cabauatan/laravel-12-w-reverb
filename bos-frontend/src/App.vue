<script setup>
import { useSampleStore } from '@/stores/useSampleStore.js';
const sampleStore = useSampleStore();

onMounted(() => {
    // sampleStore.fetch();
});
</script>

<template>
    <router-view />
</template>

<style scoped></style>
