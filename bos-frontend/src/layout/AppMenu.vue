<script setup>
import { useAuthStore } from '@/stores/useAuthStore.js';
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
const model = ref([
    {
        label: 'Home',
        role: ['User', 'AF-User', 'SP-User', 'FRE-User', 'BL-User', 'AO-User', 'Approver', 'Admin', 'SuperAdmin'],
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-home',
                to: '/',
                role: ['User', 'AF-User', 'SP-User', 'FRE-User', 'BL-User', 'AO-User', 'Approver', 'Admin', 'SuperAdmin']
            }
        ]
    },
    {
        label: 'FRE',
        role: ['Admin', 'FRE-User', 'SuperAdmin'],
        items: [
            {
                label: 'Contract',
                icon: 'fa-solid fa-file',
                to: '/fre/contract',
                role: ['Admin', 'FRE-User', 'SuperAdmin']
            },
            {
                label: 'Subleese',
                icon: 'fa-solid fa-file',
                to: '/fre/subleese',
                role: ['Admin', 'FRE-User', 'SuperAdmin']
            }
        ]
    },
    {
        label: 'Forms',
        role: ['AF-User', 'SP-User', 'BL-User', 'AO-User', 'Approver', 'Admin', 'SuperAdmin'],
        items: [
            {
                label: 'Accreditation',
                role: ['AF-User', 'AO-User', 'Admin', 'Approver', 'SuperAdmin'],
                items: [
                    {
                        label: 'Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/accreditation/application-accreditation',
                        role: ['AF-User', 'SuperAdmin']
                    },
                    {
                        label: 'Incoming Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/accreditation/incoming-accreditation',
                        role: ['Admin', 'AO-User', 'SuperAdmin']
                    },
                    {
                        label: 'Approved Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/accreditation/approved-accreditation',
                        role: ['Admin', 'AO-User', 'SuperAdmin']
                    },
                    {
                        label: 'Ongoing Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/accreditation/ongoing-accreditation',
                        role: ['Admin', 'AO-User', 'Approver', 'SuperAdmin']
                    },
                    {
                        label: 'Cancelled Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/accreditation/cancelled-accreditation',
                        role: ['Admin', 'AO-User', 'SuperAdmin']
                    }
                ]
            },
            {
                label: 'Business License',
                role: ['BL-User', 'AO-User', 'Admin', 'Approver', 'SuperAdmin'],
                items: [
                    {
                        label: 'Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/business-license/application-bl',
                        role: ['BL-User', 'SuperAdmin']
                    },
                    {
                        label: 'Incoming Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/business-license/incoming-bl',
                        role: ['Admin', 'AO-User', 'SuperAdmin']
                    },
                    {
                        label: 'Approved Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/business-license/approved-bl',
                        role: ['Admin', 'AO-User', 'SuperAdmin']
                    },
                    {
                        label: 'Ongoing Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/business-license/ongoing-bl',
                        role: ['Admin', 'AO-User', 'Approver', 'SuperAdmin']
                    },
                    {
                        label: 'Cancelled Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/business-license/cancelled-bl',
                        role: ['Admin', 'AO-User', 'SuperAdmin']
                    }
                ]
            },
            {
                label: 'Special Permit',
                role: ['SP-User', 'AO-User', 'Admin', 'Approver', 'SuperAdmin'],
                items: [
                    {
                        label: 'Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/special-permit/application-sp',
                        role: ['SP-User', 'SuperAdmin']
                    },
                    {
                        label: 'Incoming Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/special-permit/incoming-sp',
                        role: ['Admin', 'AO-User', 'SuperAdmin']
                    },
                    {
                        label: 'Approved Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/special-permit/approved-sp',
                        role: ['Admin', 'AO-User', 'SuperAdmin']
                    },
                    {
                        label: 'Ongoing Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/special-permit/ongoing-sp',
                        role: ['Admin', 'AO-User', 'Approver', 'SuperAdmin']
                    },
                    {
                        label: 'Cancelled Applications',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/special-permit/cancelled-sp',
                        role: ['Admin', 'AO-User', 'SuperAdmin']
                    }
                ]
            },
            {
                label: 'FAB Pass',
                role: ['BL-User', 'FRE-User', 'Admin', 'SuperAdmin'],
                items: [
                    {
                        label: 'Gatepass',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/fab-pass/fab-gatepass',
                        role: ['BL-User', 'FRE-User', 'SuperAdmin']
                    },
                    {
                        label: 'Incoming Gatepass',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/fab-pass/incoming-gatepass',
                        role: ['Admin', 'SuperAdmin']
                    },
                    {
                        label: 'Approved Gatepass',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/fab-pass/approved-gatepass',
                        role: ['Admin', 'SuperAdmin']
                    },
                    {
                        label: 'Cancelled Gatepass',
                        icon: 'fa-duotone fa-thin fa-files',
                        to: '/forms/fab-pass/cancelled-gatepass',
                        role: ['Admin', 'SuperAdmin']
                    }
                ]
            }
        ]
    },

    {
        label: 'Accounts',
        role: ['Admin', 'SuperAdmin'],
        items: [
            {
                label: 'Admin',
                icon: 'fa-solid fa-users',
                to: '/accounts/admin',
                role: ['Admin', 'SuperAdmin']
            },
            {
                label: 'Approver',
                icon: 'fa-solid fa-users',
                to: '/accounts/approver',
                role: ['Admin', 'SuperAdmin']
            },
            {
                label: 'Account Officer',
                icon: 'fa-solid fa-users',
                to: '/accounts/account-officer',
                role: ['Admin', 'SuperAdmin']
            },
            {
                label: 'Users',
                icon: 'fa-solid fa-users',
                to: '/accounts/user',
                haveBadge: true,
                role: ['Admin', 'SuperAdmin']
            }
        ]
    },
    {
        label: 'Reports',
        role: ['Admin', 'SuperAdmin'],
        items: [
            {
                label: 'BL Report',
                icon: 'fa fa-chart-column',
                to: '/reports/bl-report',
                role: ['Admin', 'SuperAdmin']
            },
            {
                label: 'Accreditation Report',
                icon: 'fa fa-chart-column',
                to: '/reports/accre-report',
                role: ['Admin', 'SuperAdmin']
            },
            {
                label: 'SP Report',
                icon: 'fa fa-chart-column',
                to: '/reports/sp-report',
                role: ['Admin', 'SuperAdmin']
            },
            {
                label: 'FAB Pass report',
                icon: 'fa fa-chart-column',
                to: '/reports/fabpass-report',
                role: ['Admin', 'SuperAdmin']
            }
        ]
    },
    {
        label: 'Maintenance',
        role: ['Admin', 'SuperAdmin'],
        items: [
            {
                label: 'Department',
                icon: 'fa-solid fa-chair-office',
                to: '/maintenance/department',
                role: ['Admin', 'SuperAdmin']
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
