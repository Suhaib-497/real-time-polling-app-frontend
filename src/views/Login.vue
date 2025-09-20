<script setup>
import { onMounted, reactive, ref } from 'vue';
import barcahrtIcon from '../assets/icons/barchart.svg';
import { motion } from 'motion-v';
import axiosClient from '../api/axiosClient';
import { AtomSpinner } from 'epic-spinners'
import { useRouter } from 'vue-router';
const formData = reactive({
    email: "",
    password: ""
});

const router = useRouter();
const isCreating = ref(false);



const submitForm = async () => {
    isCreating.value=true;
    
    // console.log(isCreating.value);


    try {
        console.log(formData)
        const response = await axiosClient.post('/login', formData);
        localStorage.setItem('token', response.data.token);
            setTimeout(() => {
                router.push('/');
            }, 1500)
    } catch (error) {

    }


   

}
</script>
<template>

    <div data-aos="fade-up" data-aos-duration="1500" class="bg-background flex items-center  min-h-screen ">
        <div class=" max-w-lg mx-auto px-10 py-6 bg-white rounded-xl w-full border border-gray-200 shadow-xl">
            <div class="flex flex-col  gap-6 z-10 relative ">
                <div data-aos="zoom-in" data-aos-duration="950" class="bg-primary/10 inline-flex items-center justify-center w-20 h-20 mx-auto rounded-2xl
                hover:scale-[1.05]
                transition-all duration-300
                hover:shadow-md">
                    <img :src="barcahrtIcon" class="w-10 h-10 " alt="">
                </div>

                <h1 data-aos="slide-right" data-aos-duration="700" class="text-3xl font-semibold mx-auto ">Welcome back
                </h1>
                <span data-aos="slide-right" data-aos-duration="700" class="text-lg text-gray-500 mx-auto ">Sign in to
                    your account to continue</span>


                <form data-aos="fade-up" method="post" @submit.prevent="submitForm" data-aos-duration="1000" action=""
                    class="space-y-8">

                    <div data-aos="slide-right" data-aos-duration="1300" class="flex flex-col gap-2">
                        <label for="email" class=" text-gray-600 ">Email</label>
                        <div class="flex  items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg py-3 px-3 
                    
                        focus-within:border-primary
                          focus-within:ring-[4px]
                          focus-within:border-ring
                          focus:ring-2
                          
                          focus-within:ring-primary/50
                        
                        transform transition-all duration-200">
                            <label for="email"></label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-mail  h-5 w-5 text-gray-500"
                                aria-hidden="true">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            </svg>
                            <input required v-model="formData.email" type="email" name="email" class="placeholder:text-sm  border-0
                        outline-0

                        transform transition-all duration-200
                        " placeholder="enter your email">
                        </div>

                    </div>
                    <div data-aos="slide-left" data-aos-duration="1300" class="flex flex-col gap-2">
                        <label for="email" class=" text-gray-600 ">Password</label>
                        <div class="flex  items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg py-3 px-3 
                    
                        focus-within:border-primary
                          focus-within:ring-[4px]
                          focus-within:border-ring
                          focus:ring-2
                          
                          focus-within:ring-primary/50
                        
                        transform transition-all duration-200">
                            <label for="email"></label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-lock  h-5 w-5 text-gray-500"
                                aria-hidden="true">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input required v-model="formData.password" type="password" name="password" class="placeholder:text-sm  border-0
                        outline-0
                        transform transition-all duration-200" placeholder="enter your password">
                        </div>

                    </div>


                    <div data-aos="slide-right" data-aos-duration="1300" class="flex items-center justify-between">
                        <label class="flex items-center space-x-3 text-base"><input type="checkbox"
                                class="rounded border-border text-primary focus:ring-primary focus:ring-offset-0 w-4 h-4"><span
                                class="text-gray-900">Remember me</span></label><button class="inline-flex items-center justify-center gap-2  rounded-md font-medium transition-all  
                            outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 
                             text-primary underline-offset-4 hover:underline  p-0 h-auto text-base">Forgot
                            password?
                        </button>
                    </div>


                    <!-- <button data-aos="slide-up" data-aos-duration="1600" type="submit" class="inline-flex items-center justify-center gap-2 bg-primary text-white  w-full py-2 rounded-lg
                    cursor-pointer
                   hover:scale-[1.01] hover:opacity-95
                   transition-all duration-300 ">
                        Signin
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button> -->


                    <button :data-aos="isCreating ? 'false' : 'zoom-in-up'" data-aos-duration="1600" type="submit"
                            
                        :disabled="isCreating" :class="[
                            'inline-flex items-center justify-center gap-2 bg-primary text-white w-full py-2 rounded-lg cursor-pointer hover:scale-[1.01] hover:opacity-95 transition-all duration-300',
                            isCreating ? 'opacity-50 cursor-not-allowed' : ''
                        ]">

                        <AtomSpinner v-if="isCreating" :animation-duration="1000" :size="33" color="#FFFFFF" />
                        <span v-if="isCreating">Signing In...</span>
                        <span v-else class="inline-flex items-center justify-center gap-2">
                            Sign In
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </span>
                    </button>

                   



                    <div data-aos="slide-up" data-aos-duration="1900" class="grid grid-cols-4 mt-6 items-center">
                        <div class="border border-gray-300  "></div>
                        <span class="col-span-2 text-center text-gray-600 uppercase">Don't have an account?</span>
                        <div class="border border-gray-300"></div>
                    </div>
                    <router-link data-aos="slide-up" data-aos-duration="2100" to="/signup" class="inline-flex justify-center items-center bg-gray-50 border border-gray-200 text-sm  w-full rounded-lg py-3 font-medium
                            hover:bg-primary/20 hover:text-blue-800
                            transform transition-all duration-300 
                            hover:scale-[1.02]">
                        Create new account
                    </router-link>
                </form>
            </div>


            <!-- background -->
            <div class="absolute inset-0 overflow-hidden">
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
    </div>

</template>