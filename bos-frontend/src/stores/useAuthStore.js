import { defineStore } from 'pinia';
import { login } from '@/api/authApi';
import router from '@/router';

export const useAuthStore = defineStore({
    id: 'auth-store',
    state: () => ({
        user: [],
        token: '',
        role: ['Admin'],
        haveAccount: false,
        message: null,
        newUser: 0,
        loading: false
    }),
    getters: {
        get_user: (state) => state.user,
        get_token: (state) => state.token,
        get_role: (state) => state.role,
        get_haveAccount: (state) => state.haveAccount,
        get_message: (state) => state.message,
        get_newUser: (state) => state.newUser,
        get_loading: (state) => state.loading
    },
    actions: {
        async submitLogin(form) {
            this.message = null;
            this.loading = true;
            this.haveAccount = false;
            try {
                await login(form).then((response) => {
                    if (response.code != 401) {
                        console.log(response);

                        if (this.role.includes('User')) {
                            setTimeout(() => {
                                this.loading = false;
                                router.push('/new-user');
                            }, 1000);
                        } else {
                            setTimeout(() => {
                                this.loading = false;
                                router.push('/');
                            }, 1000);
                        }
                    }
                });
            } catch (e) {
                this.loading = false;
                this.message = 'Incorrect email and password !';
                console.log(e);
            }
        },
        setMenu(role) {
            return this.role.map((element) => role.includes(element)).includes(true);
        },
        async logout() {
            // await logout().then((response) => {});
            this.user = [];
            this.token = '';
            this.role = ['Admin'];
            this.haveAccount = false;
            this.newUser = 0;
            this.message = null;
            router.push('/auth/login');
            this.loading = false;
        }
    },
    persist: true
});
