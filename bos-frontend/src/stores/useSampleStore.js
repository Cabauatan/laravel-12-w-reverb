import Resource from '@/api/resource.js';
import { defineStore } from 'pinia';

export const useSampleStore = defineStore({
    id: 'sample-store',
    state: () => ({
        data: []
    }),
    getters: {
        get_data: (state) => state.data
    },
    actions: {
        async fetch() {
            let api = new Resource('api/BudgetaryRequirements/BRFSummaryReports?Year=2025');
            await api
                .list()
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false;
                });
        }
    },
    persist: true
});
