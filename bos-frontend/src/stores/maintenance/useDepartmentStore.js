import Resource from '@/api/resource.js';
import { defineStore } from 'pinia';

export const useDepartmentStore = defineStore({
    id: 'department-store',
    state: () => ({
        data: []
    }),
    getters: {
        get_data: (state) => state.data
    },
    actions: {
        async fetch() {
            let api = new Resource('api/maintenance/list');
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
