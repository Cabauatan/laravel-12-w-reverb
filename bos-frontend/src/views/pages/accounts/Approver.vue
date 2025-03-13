<script setup>
import { ProductService } from '@/service/ProductService';

const products = ref();
onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});
</script>

<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="grid">
                    <div class="flex justify-between align-items-center">
                        <div>
                            <Button icon="pi pi-plus" class="mr-2" severity="secondary" text v-tooltip.bottom="'New User'" @click="router.push('/auth/register')" />
                            <!-- <Button icon="pi pi-print" class="mr-2" severity="secondary" text v-tooltip.bottom="'Print Table'" /> -->
                            <Button icon="pi pi-download" severity="secondary" text v-tooltip.bottom="'Export to Excel'" />
                            <!-- <Select placeholder="Year" :options="[2025, 2024, 2023, 2022]" class="w-60 ml-5" /> -->
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
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<style lang="scss" scoped></style>
