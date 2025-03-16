import { defineStore } from 'pinia';
import { login, logout } from '@/api/authApi';
import router from '@/router';

export const useAuthStore = defineStore({
    id: 'auth-store',
    state: () => ({
        user_name: '',
        token: '',
        role: [''],
        message: null,
        newUser: 0,
        loading: false
    }),
    getters: {
        get_user_name: (state) => state.user_name,
        get_token: (state) => state.token,
        get_role: (state) => state.role,
        get_message: (state) => state.message,
        get_newUser: (state) => state.newUser,
        get_loading: (state) => state.loading
    },
    actions: {
        async submitLogin(form) {
            this.message = null;
            this.loading = true;
            try {
                await login(form).then((response) => {
                    if (response.code != 401) {
                        console.log(response);
                        this.user_name = response.data.name;
                        this.token = response.data.token;
                        this.role = response.data.roles;
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
            await logout().then(() => {
                this.user_name = [];
                this.token = '';
                this.role = [];
                this.haveAccount = false;
                this.newUser = 0;
                this.message = null;
                router.push('/auth/login');
                this.loading = false;
            });
        }
    },
    persist: true
});
