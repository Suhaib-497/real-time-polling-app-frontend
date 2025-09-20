<script setup>
import { reactive, ref, watchEffect } from 'vue';
import barcahrtIcon from '../assets/icons/barchart.svg'
import { motion } from 'motion-v';
import axiosClient from '../api/axiosClient';
import { AtomSpinner } from 'epic-spinners'
import { useRouter } from 'vue-router';
const formData = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});
const router = useRouter();
const isCreating = ref(false);


console.log("this the token",localStorage.getItem('token'))

const submitForm = async () => {
   isCreating.value=true;

    try {
        const response = await axiosClient.post('/register', formData);
        console.log(response);
        setTimeout(() => {
            router.push('/login');
        }, 1500)


    } catch (error) {
        if (error.response) {
            console.log('validation error', error.response.data);
        } else {
            console.log('something went wrong', error);
        }

    }
}
</script>
<template>

    <div class="bg-background flex items-center  min-h-screen overflow-y-hidden ">
        <div data-aos="fade-up" data-aos-duration="500" class="
         max-w-lg mx-auto px-10 py-6 bg-white rounded-xl w-full border border-gray-200 shadow-xl
             relative z-10  my-6 
            ">
            <div class="flex flex-col gap-6 ">
                <div data-aos="zoom-in" data-aos-duration="1500" class="bg-primary/10 inline-flex items-center justify-center w-20 h-20 mx-auto rounded-2xl
                hover:scale-[1.05]
                transition-all duration-300
                hover:shadow-md">
                    <img :src="barcahrtIcon" class="w-10 h-10 " alt="">
                </div>
                <div data-aos="fade-up" data-aos-duration="800" class="text-center space-y-1">
                    <h1 class="text-3xl font-semibold mx-auto ">Create your account</h1>
                    <span class="text-lg text-gray-500 mx-auto ">Join thousands of users creating engaging polls</span>
                </div>



                <form @submit.prevent="submitForm" class="space-y-8">
                    <!-- Full Name Field -->
                    <div data-aos="fade-up" data-aos-duration="215" class="flex flex-col gap-2">
                        <label for="name" class="">Full name</label>
                        <div class="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg py-3 px-3 
                  focus-within:border-primary
                  focus-within:ring-[4px]
                  focus-within:ring-primary/50
                  transform transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-user h-5 w-5 text-gray-500"
                                aria-hidden="true">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <input id="name" v-model="formData.name" type="text" name="name"
                                class="flex-1 bg-transparent placeholder:text-sm border-0 outline-0 transform transition-all duration-200"
                                placeholder="Enter your full name" required>
                        </div>
                    </div>

                    <!-- Email Field -->
                    <div data-aos="fade-up" data-aos-duration="430" class="flex flex-col gap-2">
                        <label for="email" class="">Email address</label>
                        <div class="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg py-3 px-3 
                  focus-within:border-primary
                  focus-within:ring-[4px]
                  focus-within:ring-primary/50
                  transform transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-mail h-5 w-5 text-gray-500"
                                aria-hidden="true">
                                <path d="m4 4 16 0 0 16-16 0Z"></path>
                                <path d="m4 4 8 8 8-8"></path>
                            </svg>
                            <input id="email" v-model="formData.email" type="email" name="email"
                                class="flex-1 bg-transparent placeholder:text-sm border-0 outline-0 transform transition-all duration-200"
                                placeholder="Enter your email address" required>
                        </div>
                    </div>

                    <!-- Password Field -->
                    <div data-aos="fade-up" data-aos-duration="645" class="flex flex-col gap-2">
                        <label for="password" class="">Password</label>
                        <div class="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg py-3 px-3 
                  focus-within:border-primary
                  focus-within:ring-[4px]
                  focus-within:ring-primary/50
                  transform transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-lock h-5 w-5 text-gray-500"
                                aria-hidden="true">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input id="password" v-model="formData.password" type="password" name="password"
                                class="flex-1 bg-transparent placeholder:text-sm border-0 outline-0 transform transition-all duration-200"
                                placeholder="Create password" required>
                        </div>
                    </div>

                    <!-- Confirm Password Field -->
                    <div data-aos="fade-up" data-aos-duration="860" class="flex flex-col gap-2">
                        <label for="password_confirmation" class="">Confirm Password</label>
                        <div class="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg py-3 px-3 
                  focus-within:border-primary
                  focus-within:ring-[4px]
                  focus-within:ring-primary/50
                  transform transition-all duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-lock h-5 w-5 text-gray-500"
                                aria-hidden="true">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input id="password_confirmation" v-model="formData.password_confirmation" type="password"
                                name="password_confirmation"
                                class="flex-1 bg-transparent placeholder:text-sm border-0 outline-0 transform transition-all duration-200"
                                placeholder="Confirm your password" required>
                        </div>
                    </div>

                    <!-- Terms and Conditions -->
                    <div data-aos="fade-up" data-aos-duration="1075" class="space-y-3">
                        <label class="flex items-start space-x-3 text-base">
                            <input v-model="agreedToTerms" type="checkbox"
                                class="mt-1 rounded border-border text-primary focus:ring-primary focus:ring-offset-0 w-4 h-4"
                                required>
                            <span class="text-muted-foreground">I agree to the
                                <button type="button"
                                    class="inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all shrink-0 outline-none focus-visible:border-ring text-primary p-0 h-auto text-base underline">
                                    Terms of Service
                                </button> and
                                <button type="button"
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all shrink-0 outline-none text-primary p-0 h-auto text-base underline">
                                    Privacy Policy
                                </button>
                            </span>
                        </label>
                    </div>

                    <!-- Error Message -->
                    <div v-if="errorMessage" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        {{ errorMessage }}
                    </div>

                    <!-- Submit Button -->
                    <button :data-aos="isCreating ? 'false' : 'zoom-in-up'" data-aos-duration="1600" type="submit"
                   
                        :disabled="isCreating" :class="[
                            'inline-flex items-center justify-center gap-2 bg-primary text-white w-full py-2 rounded-lg cursor-pointer hover:scale-[1.01] hover:opacity-95 transition-all duration-300',
                            isCreating ? 'opacity-50 cursor-not-allowed' : ''
                        ]">

                        <AtomSpinner v-if="isCreating" :animation-duration="1000" :size="33" color="#FFFFFF" />
                        <span v-if="isCreating">Creating Account...</span>
                        <span v-else class="inline-flex items-center justify-center gap-2">
                            Sign Up
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </span>
                    </button>

                    <!-- Divider -->
                    <div data-aos="slide-up" data-aos-duration="1900" class="grid grid-cols-5 mt-6 items-center">
                        <div class="border border-gray-300"></div>
                        <span class="col-span-3 text-center text-gray-600 uppercase">Already have an account?</span>
                        <div class="border border-gray-300"></div>
                    </div>

                    <!-- Sign In Link -->
                    <router-link to="/Login"
                        class="inline-flex justify-center items-center bg-gray-50 border border-gray-200 text-sm w-full rounded-lg py-3 font-medium hover:bg-primary/20 hover:text-blue-800 transform transition-all duration-300 hover:scale-[1.02]">
                        Sign in instead
                    </router-link>
                </form>
            </div>



        </div>

        <div class="absolute inset-0 overflow-hidden ">
            <!-- Blurred circles (static) -->
            <div class="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl"></div>
            <div class="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-2xl"></div>

            <!-- Floating dots -->
            <motion.div :initial="{ y: 0 }" :animate="{ y: [0, -15, 0] }"
                :transition="{ duration: 3, repeat: Infinity, easing: ['easein', 'easeout'] }"
                class="absolute w-2 h-2 bg-primary/30 rounded-full" style="left: 20%; top: 28%;" />

            <motion.div :initial="{ y: 0 }" :animate="{ y: [0, -10, 0] }"
                :transition="{ duration: 2.5, repeat: Infinity, easing: 'easeInOut' }"
                class="absolute w-2 h-2 bg-primary/30 rounded-full" style="left: 35%; top: 40%;" />

            <motion.div :initial="{ y: 0 }" :animate="{ y: [0, -20, 0] }"
                :transition="{ duration: 4, repeat: Infinity, easing: 'easeInOut' }"
                class="absolute w-2 h-2 bg-primary/30 rounded-full" style="left: 50%; top: 50%;" />

            <motion.div :initial="{ y: 0 }" :animate="{ y: [0, -20, 0] }"
                :transition="{ duration: 4, repeat: Infinity, easing: 'easeInOut' }"
                class="absolute w-2 h-2 bg-primary/30 rounded-full" style="left: 65%; top: 60%;" />

            <motion.div :initial="{ y: 0 }" :animate="{ y: [0, -20, 0] }"
                :transition="{ duration: 4, repeat: Infinity, easing: 'easeInOut' }"
                class="absolute w-2 h-2 bg-primary/30 rounded-full" style="left: 80%; top: 70%;" />

            <motion.div :initial="{ y: 0 }" :animate="{ y: [0, -20, 0] }"
                :transition="{ duration: 4, repeat: Infinity, easing: 'easeInOut' }"
                class="absolute w-2 h-2 bg-primary/30 rounded-full" style="left: 95%; top: 80%;" />

            <!-- Grid background -->
            <div
                class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]">
            </div>
        </div>
    </div>

</template>