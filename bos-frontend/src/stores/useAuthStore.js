import { UserService } from '@/service/UserService';
import { defineStore } from 'pinia';

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
            const tempData = UserService.getUser();
            // try {
            //     await login(form).then((response) => {
            //         if (response.code != 401) {
            //             this.user = response.data.user;
            //             this.token = response.data.accessToken;
            //             this.haveAccount = true;
            //             this.message = null;
            //             let api = new Resource('admin/users');
            //             api.list()
            //                 .then((data) => {
            //                     this.role = ['Admin'];
            //                 })
            //                 .catch((error) => {
            //                     console.log(error);
            //                 })
            //                 .finally(() => {
            //                     this.loading = false;
            //                 });
            //         }
            //     });
            // } catch (e) {
            //     this.haveAccount = false;
            //     console.log(e);
            // }
            if (tempData.filter((user) => user.email == form.email).length > 0) {
                if (tempData.filter((user) => user.password == form.password).length > 0) {
                    let data = tempData.filter((user) => user.email == form.email);
                    console.log(data);
                    this.user = data;
                    this.token = data[0].token;
                    this.haveAccount = true;
                    this.message = null;
                    this.role = data[0].role;
                    this.newUser = tempData.filter((item) => item.role.length == 1 && item.role.includes('User'));
                } else this.message = 'Incorrect password !';
            }
            if (this.haveAccount) {
                if (this.role.length == 1 && this.role.includes('User')) {
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
            if (!this.haveAccount && !this.message) {
                this.loading = false;
                this.message = 'Incorrect email and password !';
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
