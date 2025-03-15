<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { useLayout } from '@/layout/composables/layout';
import { useAuthStore } from '@/stores/useAuthStore.js';
import { useVuelidate } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import router from '@/router';

const { checkDarkMode } = useLayout();

checkDarkMode();

const authStore = useAuthStore();

const rules = {
    email: { required, email },
    password: { required }
};
const state = ref({
    email: null,
    password: null
});
const showPassword = ref(false);
const passwordType = ref('password');

const login = async () => {
    const result = await v$.value.$validate();
    if (result) {
        authStore.submitLogin(state.value);
    } else {
        console.log('cancel');
    }
};

const v$ = useVuelidate(rules, state);

const showPasswordToggle = () => {
    if (showPassword.value) {
        passwordType.value = 'text';
    } else passwordType.value = 'password';
};

onMounted(() => {
    authStore.$state.message = null;
    authStore.$state.loading = false;
});
</script>

<template>
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden select-none font-roboto" :draggable="false">
        <FloatingConfigurator />
        <div class="flex flex-col items-center justify-center">
            <Card style="width: 30rem; overflow: hidden" class="p-5">
                <template #header>
                    <div class="flex justify-center items-center">
                        <img src="/fabicon.ico" alt="" class="w-20 h-20" />
                    </div>
                </template>
                <template #title>
                    <p class="text-center font-bold text-2xl select-none">User Login</p>
                </template>
                <template #subtitle>
                    <p class="text-center block">Welcome to Business Operation System</p>
                    <p class="text-center block">(Permits Application)</p>
                </template>
                <template #content>
                    <Form @submit="login">
                        <div class="mt-5">
                            <FloatLabel variant="on">
                                <IconField>
                                    <InputIcon class="pi pi-user" />
                                    <InputText id="email" v-model="state.email" autocomplete="off" class="w-full h-16" size="large" :invalid="v$.email.$error" />
                                </IconField>
                                <label for="email">Email</label>
                            </FloatLabel>
                            <Message v-if="v$.email.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.email.$silentErrors[0].$message }} </Message>
                        </div>
                        <div class="mt-5 mb-5">
                            <FloatLabel variant="on">
                                <IconField>
                                    <InputIcon :class="'pi pi-lock'" />
                                    <InputText id="password" v-model="state.password" autocomplete="off" class="w-full h-16" size="large" :type="passwordType" :invalid="v$.password.$error" />
                                </IconField>
                                <label for="password">Password</label>
                            </FloatLabel>
                            <Message v-if="v$.password.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.password.$silentErrors[0].$message }}</Message>
                        </div>
                        <div class="flex items-center gap-2 mb-5">
                            <Checkbox v-model="showPassword" binary @update:model-value="showPasswordToggle" />
                            <label class="text-lg"> Show Password </label>
                        </div>
                        <div class="flex justify-center items-center">
                            <Message v-if="authStore.get_message" severity="error" size="small" variant="simple" class="text-red-600 mb-5">{{ authStore.get_message }}</Message>
                        </div>
                        <Button type="submit" class="block w-full h-16">
                            <ProgressSpinner v-if="authStore.get_loading" style="width: 30px; height: 30px" strokeWidth="8" fill="transparent" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
                            <p class="font-bold text-xl tracking-widest" v-if="!authStore.get_loading"><i class="font-bold pi pi-sign-in mr-5"></i>LOGIN</p></Button
                        >
                        <!-- <Button @click="resetError()"></Button> -->
                    </Form>
                </template>
                <template #footer>
                    <div class="flex justify-center items-center">
                        <p class="font-serif cursor-pointer hover:underline select-none text-forgot-pass">Forgot Password?</p>
                    </div>
                    <div class="flex justify-center items-center">
                        <p class="font-serif cursor-pointer hover:underline select-none text-forgot-pass" @click="router.push('/auth/register')">Create New Account</p>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
.custom-neon-button {
    background-color: #00ffcc !important;
    color: #000 !important;
    border: 2px solid #00e6b8;
    text-shadow: 0px 0px 5px #00ffcc;
    box-shadow: 0px 0px 10px #00ffcc;
}

.custom-neon-button:hover {
    background-color: #00e6b8 !important;
    box-shadow: 0px 0px 15px #00ffcc;
}
</style>
