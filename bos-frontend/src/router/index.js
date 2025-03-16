import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/fre',
                    children: [
                        {
                            path: 'contract',
                            name: 'contract',
                            component: () => import('@/views/pages/fre/Contract.vue')
                        },
                        {
                            path: 'subleese',
                            name: 'subleese',
                            component: () => import('@/views/pages/fre/Subleese.vue')
                        }
                    ]
                },
                {
                    path: '/maintenance',
                    children: [
                        {
                            path: 'department',
                            name: 'department',
                            component: () => import('@/views/pages/maintenance/Department.vue')
                        }
                    ]
                },
                {
                    path: '/forms',
                    children: [
                        {
                            path: 'accreditation',
                            children: [
                                {
                                    path: 'application-accreditation',
                                    name: 'application-accreditation',
                                    component: () => import('@/views/pages/forms/accreditation/Application.vue')
                                },
                                {
                                    path: 'incoming-accreditation',
                                    name: 'incoming-accreditation',
                                    component: () => import('@/views/pages/forms/accreditation/IncomingApplication.vue')
                                },
                                {
                                    path: 'approved-accreditation',
                                    name: 'approved-accreditation',
                                    component: () => import('@/views/pages/forms/accreditation/ApprovedApplication.vue')
                                },
                                {
                                    path: 'ongoing-accreditation',
                                    name: 'ongoing-accreditation',
                                    component: () => import('@/views/pages/forms/accreditation/OngoingApplication.vue')
                                },
                                {
                                    path: 'cancelled-accreditation',
                                    name: 'cancelled-accreditation',
                                    component: () => import('@/views/pages/forms/accreditation/CancelledApplication.vue')
                                }
                            ]
                        },
                        {
                            path: 'business-license',
                            children: [
                                {
                                    path: 'application-bl',
                                    name: 'application-bl',
                                    component: () => import('@/views/pages/forms/businesslicense/Application.vue')
                                },
                                {
                                    path: 'incoming-bl',
                                    name: 'incoming-bl',
                                    component: () => import('@/views/pages/forms/businesslicense/IncomingApplication.vue')
                                },
                                {
                                    path: 'approved-bl',
                                    name: 'approved-bl',
                                    component: () => import('@/views/pages/forms/businesslicense/ApprovedApplication.vue')
                                },
                                {
                                    path: 'ongoing-bl',
                                    name: 'ongoing-bl',
                                    component: () => import('@/views/pages/forms/businesslicense/OngoingApplication.vue')
                                },
                                {
                                    path: 'cancelled-bl',
                                    name: 'cancelled-bl',
                                    component: () => import('@/views/pages/forms/businesslicense/CancelledApplication.vue')
                                }
                            ]
                        },
                        {
                            path: 'special-permit',
                            children: [
                                {
                                    path: 'application-sp',
                                    name: 'application-sp',
                                    component: () => import('@/views/pages/forms/specialpermit/Application.vue')
                                },
                                {
                                    path: 'incoming-sp',
                                    name: 'incoming-sp',
                                    component: () => import('@/views/pages/forms/specialpermit/IncomingApplication.vue')
                                },
                                {
                                    path: 'approved-sp',
                                    name: 'approved-sp',
                                    component: () => import('@/views/pages/forms/specialpermit/ApprovedApplication.vue')
                                },
                                {
                                    path: 'ongoing-sp',
                                    name: 'ongoing-sp',
                                    component: () => import('@/views/pages/forms/specialpermit/OngoingApplication.vue')
                                },
                                {
                                    path: 'cancelled-sp',
                                    name: 'cancelled-sp',
                                    component: () => import('@/views/pages/forms/specialpermit/CancelledApplication.vue')
                                }
                            ]
                        },
                        {
                            path: 'fab-pass',
                            children: [
                                {
                                    path: 'fab-gatepass',
                                    name: 'fab-gatepass',
                                    component: () => import('@/views/pages/forms/fabpass/Gatepass.vue')
                                },
                                {
                                    path: 'incoming-gatepass',
                                    name: 'incoming-gatepass',
                                    component: () => import('@/views/pages/forms/fabpass/Incoming.vue')
                                },
                                {
                                    path: 'approved-gatepass',
                                    name: 'approved-gatepass',
                                    component: () => import('@/views/pages/forms/fabpass/Approved.vue')
                                },
                                {
                                    path: 'cancelled-gatepass',
                                    name: 'cancelled-gatepass',
                                    component: () => import('@/views/pages/forms/fabpass/Cancelled.vue')
                                }
                            ]
                        }
                    ]
                },
                {
                    path: '/accounts',
                    children: [
                        {
                            path: 'admin',
                            name: 'admin',
                            component: () => import('@/views/pages/accounts/Admin.vue')
                        },
                        {
                            path: 'approver',
                            name: 'approver',
                            component: () => import('@/views/pages/accounts/Approver.vue')
                        },
                        {
                            path: 'account-officer',
                            name: 'account-officer',
                            component: () => import('@/views/pages/accounts/AccountOfficer.vue')
                        },
                        {
                            path: 'user',
                            name: 'user',
                            component: () => import('@/views/pages/accounts/User.vue')
                        }
                    ]
                },
                {
                    path: '/reports',
                    children: [
                        {
                            path: 'bl-report',
                            name: 'bl-report',
                            component: () => import('@/views/pages/reports/BLreport.vue')
                        },
                        {
                            path: 'accre-report',
                            name: 'accre-report',
                            component: () => import('@/views/pages/reports/Accreditationreport.vue')
                        },
                        {
                            path: 'sp-report',
                            name: 'sp-report',
                            component: () => import('@/views/pages/reports/SPreport.vue')
                        },
                        {
                            path: 'fabpass-report',
                            name: 'fabpass-report',
                            component: () => import('@/views/pages/reports/Fabpassreport.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/auth/Login.vue')
        },
        {
            path: '/new-user',
            name: 'new-user',
            component: () => import('@/views/NewAccount.vue')
        },

        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/views/auth/Registration.vue')
        },

        {
            path: '/forbidden',
            name: 'forbidden',
            component: () => import('@/views/weberrors/403_Forbidden.vue')
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: () => import('@/views/weberrors/404_NotFound.vue')
        },
        {
            path: '/request-timeout',
            name: 'requesttimeout',
            component: () => import('@/views/weberrors/408_RequestTimeout.vue')
        },
        {
            path: '/validation-error',
            name: 'validationerror',
            component: () => import('@/views/weberrors/422_Validation.vue')
        },
        {
            path: '/internal-error',
            name: 'internalerror',
            component: () => import('@/views/weberrors/500_InternalError.vue')
        },
        {
            path: '/not-implemented',
            name: 'notimplemented',
            component: () => import('@/views/weberrors/501_NotImplemented.vue')
        },
        {
            path: '/service-overload',
            name: 'serviceoverload',
            component: () => import('@/views/weberrors/502_ServiceOverload.vue')
        },
        {
            path: '/service-unavailable',
            name: 'serviceunavailable',
            component: () => import('@/views/weberrors/503_ServiceUnavailable.vue')
        }
    ]
});

export default router;
