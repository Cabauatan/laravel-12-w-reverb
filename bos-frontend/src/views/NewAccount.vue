<template>
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden select-none font-roboto" :draggable="false">
        <div class="grid">
            <div class="col-span-12 md:col-span-12 flex justify-center">
                <div class="block-flex">Please Wait for Approval from Registration Department before you start Thank you.</div>
            </div>
            <div class="col-span-12 md:col-span-12 flex justify-center">
                <Button label="Back" class="block" @click="router.push('/auth/login')"></Button>
            </div>
            <div class="col-span-12 md:col-span-12 flex justify-center mt-2">
                <Button label="TRY" class="block" @click="router.push('/auth/login')"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores/useAuthStore.js';

const authStore = useAuthStore();

window.Echo.channel(`sample.${authStore.get_id}`).listen('SampleReverbEvent', (e) => {
    console.log('connected');
});
</script>

<style scoped></style>
