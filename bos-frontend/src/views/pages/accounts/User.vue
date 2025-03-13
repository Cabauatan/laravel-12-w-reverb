<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores/useAuthStore.js';

const authStore = useAuthStore();

const newUser = authStore.get_newUser;
</script>

<template>
    <div class="card p-4 font-roboto">
        <DataTable :value="newUser" stripedRows tableStyle="min-width: 50rem" class="">
            <template #header>
                <div class="grid">
                    <div class="flex justify-between align-items-center">
                        <div>
                            <Button icon="pi pi-plus" class="mr-2" severity="secondary" text v-tooltip.bottom="'New User'" @click="router.push('/auth/register')" />
                            <!-- <Button icon="pi pi-print" class="mr-2" severity="secondary" text v-tooltip.bottom="'Print Table'" /> -->
                            <Button icon="pi pi-download" severity="secondary" text v-tooltip.bottom="'Export to Excel'" />
                            <!-- <Select placeholder="Search" :options="[2025, 2024, 2023, 2022]" class="w-60 ml-5" /> -->
                        </div>
                        <div>
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-search" />
                                </InputIcon>
                                <InputText placeholder="Search" class="w-96" />
                            </IconField>
                        </div>
                    </div>
                </div>
            </template>
            <Column field="lastname" header="Last Name"></Column>
            <Column field="firstname" header="First Name"></Column>
            <Column field="middlename" header="Middle Name"></Column>
            <Column field="email" header="Email Address"></Column>
        </DataTable>
    </div>
</template>

<style scoped></style>
