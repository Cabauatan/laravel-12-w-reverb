<script setup>
import { useLayout } from '@/layout/composables/layout';
import router from '@/router';
import { useAuthStore } from '@/stores/useAuthStore.js';
import { useVuelidate } from '@vuelidate/core';
import { email, required, requiredIf } from '@vuelidate/validators';
const { checkDarkMode } = useLayout();

checkDarkMode();

const authStore = useAuthStore();

const hasMid = ref(false);

const rules = {
    last_name: { required },
    first_name: { required },
    middle_name: { requiredIf: requiredIf(hasMid) },
    email_address: { required, email },
    contact_number: { required },
    address: { required },
    company_name: { required },
    company_number: { required },
    company_email: { required, email },
    company_address: { required },
    gov_id: { required },
    com_id: { required }
};
const state = ref({
    last_name: '',
    first_name: '',
    middle_name: '',
    email_address: '',
    contact_number: '',
    address: '',
    company_name: '',
    company_number: '',
    company_email: '',
    company_address: '',
    permit: 'accre',
    gov_id: '',
    com_id: '',
    ext_name: ''
});
const v$ = useVuelidate(rules, state);

const createAccount = async () => {
    const result = await v$.value.$validate();
    if (result) {
        // authStore.submitLogin(state.value);
        console.log(state.value);
    } else {
        console.log(state.value);
    }
};

function onFileSelectGov(event) {
    const file = event.files[0];
    console.log(event.files[0]);

    const reader = new FileReader();
    reader.onload = async (e) => {
        state.value.gov_id = e.target.result;
    };
    reader.onerror = (error) => {
        console.log('Error: ', error);
    };
    reader.readAsDataURL(file);
}
function onFileSelectCom(event) {
    const file = event.files[0];
    const reader = new FileReader();
    reader.onload = async (e) => {
        state.value.com_id = e.target.result;
    };
    reader.onerror = (error) => {
        console.log('Error: ', error);
    };
    reader.readAsDataURL(file);
}

onMounted(() => {
    authStore.$state.message = null;
});
</script>

<template>
    <div class="md:p-0 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden select-none font-roboto" :draggable="false">
        <div class="card w-[1280px] shadow-xl">
            <Form @submit="createAccount">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12">
                        <div class="flex justify-start text-4xl font-bold pi pi-arrow-left cursor-pointer" @click="router.push('/accounts/user')" v-if="authStore.setMenu(['Admin', 'Superadmin'])"></div>
                        <div class="flex justify-center text-4xl font-bold mb-20">Account Registration</div>
                    </div>
                    <div class="col-span-12">
                        <div class="flex flex-nowrap text-2xl font-bold">Client Information</div>
                    </div>
                    <div class="col-span-12 md:col-span-4">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <IconField>
                                    <InputIcon class="pi pi-user" />
                                    <InputText id="value3" v-model="state.last_name" class="w-full h-14 no-radius" :invalid="v$.last_name.$error" />
                                </IconField>
                                <label for="value3">Last Name</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.last_name.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.last_name.$silentErrors[0].$message }} </Message>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-3">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <IconField>
                                    <InputIcon class="pi pi-user" />
                                    <InputText id="value3" v-model="state.first_name" class="w-full h-14 no-radius" :invalid="v$.first_name.$error" />
                                </IconField>
                                <label for="value3">First Name</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.first_name.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.first_name.$silentErrors[0].$message }} </Message>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-4">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full mb-1">
                                <IconField>
                                    <InputIcon class="pi pi-user" />
                                    <InputText id="value3" v-model="state.middle_name" class="w-full h-14 no-radius" :disabled="!hasMid" :invalid="v$.middle_name.$error" />
                                </IconField>
                                <label for="value3">Middle Name</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.middle_name.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.middle_name.$silentErrors[0].$message }} </Message>
                        </div>
                        <div class="flex items-center gap-2">
                            <Checkbox v-model="hasMid" :binary="true" />
                            <label class="text-sm"> Check if Applicable </label>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-1">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <InputText id="value3" v-model="state.ext_name" class="w-full h-14 no-radius" />
                                <label for="value3">Ext.</label>
                            </FloatLabel>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-4">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <IconField>
                                    <InputIcon class="pi pi-at" />
                                    <InputText id="value3" v-model="state.email_address" class="w-full h-14 no-radius" :invalid="v$.email_address.$error" />
                                </IconField>
                                <label for="value3">Email Address</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.email_address.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.email_address.$silentErrors[0].$message }} </Message>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-3">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <IconField>
                                    <InputIcon class="pi pi-phone" />
                                    <InputMask id="on_label" v-model="state.contact_number" mask="(+63)9999-999-999" class="w-full h-14 no-radius" :invalid="v$.contact_number.$error" />
                                </IconField>
                                <label for="on_label">Contact Number</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.contact_number.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.contact_number.$silentErrors[0].$message }} </Message>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-5">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <IconField>
                                    <InputIcon class="pi pi-map-marker" />
                                    <InputText id="value3" v-model="state.address" class="w-full h-14 no-radius" :invalid="v$.address.$error" />
                                </IconField>
                                <label for="value3">Address</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.address.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.address.$silentErrors[0].$message }} </Message>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-12">
                        <Divider />
                    </div>

                    <div class="col-span-12 md:col-span-12">
                        <div class="flex flex-nowrap text-2xl font-bold">Company Information</div>
                    </div>
                    <div class="col-span-12 md:col-span-9">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <IconField>
                                    <InputIcon class="pi pi-building" />
                                    <InputText id="value3" v-model="state.company_name" class="w-full h-14 no-radius" :invalid="v$.company_name.$error" />
                                </IconField>
                                <label for="value3">Company Name</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.company_name.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.company_name.$silentErrors[0].$message }} </Message>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-3">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <IconField>
                                    <InputIcon class="pi pi-phone" />
                                    <InputMask id="on_label" v-model="state.company_number" mask="(63)9999-999-999" class="w-full h-14 no-radius" :invalid="v$.company_number.$error" />
                                </IconField>
                                <label for="on_label">Contact Number</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.company_number.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.company_number.$silentErrors[0].$message }} </Message>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-5">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <IconField>
                                    <InputIcon class="pi pi-at" />
                                    <InputText id="value3" v-model="state.company_email" class="w-full h-14 no-radius" :invalid="v$.company_email.$error" />
                                </IconField>
                                <label for="value3">Email Address</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.company_email.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.company_email.$silentErrors[0].$message }} </Message>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-7">
                        <div class="flex flex-nowrap">
                            <FloatLabel variant="on" class="w-full">
                                <IconField>
                                    <InputIcon class="pi pi-map-marker" />
                                    <InputText id="value3" v-model="state.company_address" class="w-full h-14 no-radius" :invalid="v$.company_address.$error" />
                                </IconField>
                                <label for="value3">Address</label>
                            </FloatLabel>
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <Message v-if="v$.company_address.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.company_address.$silentErrors[0].$message }} </Message>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-12">
                        <Divider />
                    </div>
                    <div class="col-span-12 md:col-span-12">
                        <div class="flex flex-nowrap text-2xl font-bold">Permits</div>
                    </div>
                    <div class="col-span-12 md:col-span-12">
                        <div class="flex flex-wrap gap-4">
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="state.permit" inputId="accre" name="accre" value="accre" />
                                <label for="accre">Accreditation</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="state.permit" inputId="sp" name="sp" value="sp" />
                                <label for="sp">Special Permit</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <RadioButton v-model="state.permit" inputId="bl" name="bl" value="bl" />
                                <label for="bl">Business License</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-12">
                        <Divider />
                    </div>
                    <div class="col-span-12 md:col-span-12">
                        <div class="flex flex-nowrap text-2xl font-bold">Attachment</div>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="card flex justify-center items-center gap-6">
                            <FileUpload mode="basic" @select="onFileSelectGov" customUpload auto severity="secondary" class="p-button-outlined" v-if="!state.gov_id" chooseLabel="Government issued ID" />
                            <div class="flex justify-start items-center gap-2">
                                <Message v-if="v$.gov_id.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.gov_id.$silentErrors[0].$message }} </Message>
                            </div>
                            <Image alt="Image" preview v-if="state.gov_id">
                                <template #previewicon>
                                    <i class="pi pi-search"></i>
                                </template>
                                <template #image>
                                    <img :src="state.gov_id" alt="image" />
                                </template>
                                <template #preview="slotProps">
                                    <img :src="state.gov_id" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
                                </template>
                            </Image>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6">
                        <div class="card flex justify-center items-center gap-6">
                            <FileUpload mode="basic" @select="onFileSelectCom" customUpload auto severity="secondary" class="p-button-outlined" v-if="!state.com_id" chooseLabel="Company issued ID" />
                            <div class="flex justify-start items-center gap-2">
                                <Message v-if="v$.com_id.$error" severity="error" size="small" variant="simple" class="text-red-600">{{ v$.com_id.$silentErrors[0].$message }} </Message>
                            </div>
                            <Image alt="Image" preview v-if="state.com_id">
                                <template #previewicon>
                                    <i class="pi pi-search"></i>
                                </template>
                                <template #image>
                                    <img :src="state.com_id" alt="image" />
                                </template>
                                <template #preview="slotProps">
                                    <img :src="state.com_id" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
                                </template>
                            </Image>
                        </div>
                    </div>
                    <div class="col-span-12 mt-16">
                        <div class="flex md:flex-nowrap justify-end align-items-center space-x-4">
                            <Button type="submit" label="Submit" icon="pi pi-check" :loading="loading" @click="load" class="md:w-40 w-full no-radius" />
                            <Button type="button" label="Cancel" icon="pi pi-times" severity="danger" :loading="loading" @click="load" class="md:w-40 w-full no-radius" />
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>
.no-radius {
    border-radius: 0px 0px 0px 0px;
}
</style>
