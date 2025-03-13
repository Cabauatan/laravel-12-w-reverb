<script setup>
import { useLayout } from '@/layout/composables/layout';
import { useAuthStore } from '@/stores/useAuthStore.js';

const authStore = useAuthStore();

const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </button>
            <router-link to="/" class="layout-topbar-logo ml-4">
                <!-- <img src="/Freeport_Area_of_Bataan_logo.png" alt="" class="w-32 h-18" />
                  -->
                <strong style="font-size: 1.2rem">Permits Application</strong>
            </router-link>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" @click="toggleDarkMode(!isDarkTheme)" v-tooltip.bottom="!isDarkTheme ? 'Dark Mode' : 'Light Mode'">
                    <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
                </button>
                <!-- <div class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                        type="button"
                        class="layout-topbar-action layout-topbar-action-highlight"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </div> -->
            </div>

            <!-- <button
                class="layout-topbar-menu-button layout-topbar-action"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
            >
                <i class="pi pi-ellipsis-v"></i>
            </button> -->

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action" v-tooltip.bottom="'Calendar'">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button>
                    <OverlayBadge value="2">
                        <button type="button" class="layout-topbar-action" v-tooltip.bottom="'Notification'">
                            <i class="pi pi-bell"></i>
                            <span>Notification</span>
                        </button>
                    </OverlayBadge>
                    <button type="button" class="layout-topbar-action" @click="authStore.logout()" v-tooltip.bottom="'Sign-out'">
                        <i class="pi pi-sign-out"></i>
                        <span>Sign-out</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
