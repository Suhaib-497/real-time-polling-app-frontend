<script setup ">
import MainLayout from '../layouts/MainLayout.vue';
import RecentPolls from '../components/RecentPolls.vue';
import TabsSection from '../components/TabsSection.vue';
import { onMounted, ref } from 'vue';
import axiosClient from '../api/axiosClient';
import { useRouter } from 'vue-router';


const questions=ref([]);

onMounted(
    async ()=>{
    const token =localStorage.getItem("token");
    // console.log("this is the token",token);
    
    try {
        const response=await axiosClient.get('/index');
        questions.value=response.data;
        console.log(questions.value.length)
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
})

const router=useRouter();

const logout=()=>{
    
    localStorage.removeItem("token")
    router.push("/login");

}

</script>

<template>
    <MainLayout>

        <div class="flex flex-col gap-8 w-full">
            <button @click="logout">logout</button>
            <!-- top -->
            <TabsSection data-aos="fade-down" data-aos-duration="800" />

            <!-- middle -->

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">

                <router-link to="/create" data-aos="fade-up" data-aos-delay="100"
                    class="group transform  hover:-translate-y-2  w-full gap-8 border-gray-400 bg-white shadow-md transition-all duration-400 rounded-xl p-6 cursor-pointer">
                    <div class="flex items-center justify-between ">

                        <div class="flex flex-col">
                            <span class="font-medium">Create</span>
                            <span class="text-sm text-gray-400">Start gathering insights</span>
                        </div>

                        <div class="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-plus h-5 w-5 text-primary"
                                aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                            </svg>
                        </div>
                    </div>
                </router-link>

                <router-link to="/create" data-aos="fade-up" data-aos-delay="100"
                    class="group transform  hover:-translate-y-2  w-full gap-8 border-gray-400 bg-white shadow-md transition-all duration-700 rounded-xl p-6 cursor-pointer">
                    <div class="flex items-center justify-between ">

                        <div class="flex flex-col">
                            <span class="font-medium">0</span>
                            <span class="text-sm text-gray-400">Saved  Drafts</span>
                        </div>

                        <div class="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5 text-blue-600"
                                aria-hidden="true">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z">

                                </path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                            </svg>
                        </div>
                    </div>
                </router-link>

                <div data-aos="fade-up" data-aos-delay="200"
                    class=" w-full gap-8 border-gray-400 bg-white shadow-md transition-all duration-200 rounded-xl p-6 ">
                    <div class="flex items-center justify-between ">

                        <div class="flex flex-col">
                            <span class="font-medium">0</span>
                            <span class="text-sm text-gray-400">Total Responses</span>
                        </div>

                        <div class="bg-emerald-100 p-3 rounded-lg ">
                            <svg class="feather feather-check-square text-emerald-600 " fill="none" height="24"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="9 11 12 14 22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="300"
                    class=" w-full gap-8 border-gray-400 bg-white shadow-md transition-all duration-200 rounded-xl p-6 ">
                    <div class="flex items-center justify-between ">

                        <div class="flex flex-col">
                            <span class="font-medium">0</span>
                            <span class="text-sm text-gray-400">Active Polls</span>
                        </div>

                        <div class="bg-amber-100 p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-activity h-5 w-5 text-amber-600"
                                aria-hidden="true">
                                <path
                                    d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

            <!-- down part -->
            <div v-if="questions.length === 0" data-aos="fade-zoom-in" data-aos-delay="400" data-aos-duration="1000"
                class=" border-gray-400 bg-white shadow-md transition-all duration-200 rounded-xl p-12 max-w-md  mx-auto w-full ">
                <div class=" flex flex-col justify-center items-center align-middle gap-2 ">

                    <div class="bg-gray-50 rounded-full p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-message-square h-10 w-10 text-gray-500" aria-hidden="true">
                            <path
                                d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z">
                            </path>
                        </svg>
                    </div>

                    <h3 class="font-semibold">No polls created yet </h3>
                    <p class="text-gray-400 text-sm text-center">Create your first poll to start gathering valuable
                        insights from your audience.</p>

                    <button class="inline-flex justify-center items-center gap-2 bg-primary
                     text-white text-sm font-medium p-2 rounded-md  shadow-sm mt-6
                     shrink-0 hover:bg-primary/90
                     cursor-pointer
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-message-square h-4 w-4 mr-2" aria-hidden="true">
                            <path
                                d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z">
                            </path><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-message-square h-10 w-10 text-muted-foreground" aria-hidden="true">
                                <path
                                    d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z">
                                </path>
                            </svg>
                        </svg>
                        Create Your First Poll</button>
                </div>
            </div>

            <div v-else="questions.length>0" data-aos="fade-up" data-aos-delay="500" class="space-y-6">
                <RecentPolls :questions="questions" />
            </div>


        </div>

    </MainLayout>
</template>