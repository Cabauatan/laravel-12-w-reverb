import '@/bootstrap';
import { Form } from '@primevue/forms';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/styles.scss';
import '@/assets/tailwind.css';

const app = createApp(App);
const pinia = createPinia();

const MyPreset = definePreset(Aura, {
    //Your customizations, see the following sections for examples
    semantic: {
        primary: {
            50: '#85a3d3',
            100: '#6e91ca',
            200: '#577fc0',
            300: '#406db6',
            400: '#295aac',
            500: '#0d47a1',
            600: '#0a3d8b',
            700: '#073276',
            800: '#052862',
            900: '#031f4e',
            950: '#02163c'
        },
        colorScheme: {
            primary: {
                50: '{sky.50}',
                100: '{sky.100}',
                200: '{sky.200}',
                300: '{sky.300}',
                400: '{sky.400}',
                500: '{sky.500}',
                600: '{sky.600}',
                700: '{sky.700}',
                800: '{sky.800}',
                900: '{sky.900}',
                950: '{sky.950}'
            },
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                }
            }
        }
    }
});

app.use(pinia);

app.use(router);
app.use(Form);
app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

pinia.use(piniaPluginPersistedState);

app.mount('#app');
