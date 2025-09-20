<script setup>
import TabsSection from '../components/TabsSection.vue';
import MainLayout from '../layouts/MainLayout.vue';
import blackBar from '../assets/icons/blackBar.svg'
</script>
<template>
    <MainLayout>
        <div class="flex flex-col gap-8 w-full">
            <TabsSection data-aos="fade-down" data-aos-duration="800">
                <template #title>
                    Poll Results
                </template>

                <template #subtitle>
                    Explore detailed analytics and response patterns.
                </template>
            </TabsSection>

            <div data-aos="fade-right" data-aos-delay="100">
                <router-link to="/" role="tab" aria-selected="true" class="inline-flex items-center  
                    gap-1 justify-center text-sm font-medium rounded-lg  border border-gray-200 px-2 py-2 shadow-sm
         
                    text-foreground  
                        hover:-translate-x-1
                    disabled:pointer-events-none disabled:opacity-50
                    hover:bg-primary/20 hover:text-blue-800
                                        transform transition-all duration-300
                    
                    ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-arrow-left h-4 w-4 mr-2" aria-hidden="true">
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path>
                    </svg>
                    Back to Dashboard
                </router-link>
            </div>

            <!-- both two parts down are here -->
            <div class="max-w-4xl mx-auto space-y-6 w-full">
                <div
                    data-aos="zoom-in" 
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    class=" shadow-md bg-gradient-to-r from-primary/5 to-primary/10 flex flex-col items-start  lg:flex-row  lg:justify-between lg:items-center  border border-gray-200 rounded-xl  gap-3 p-6 ">

                    <!-- top -->
                    <div class=" flex flex-col rounded-lg gap-1 ">
                        <div class="flex gap-2 items-center ">
                            <img src="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3ctitle%3ebackground%3c/title%3e%3crect%20fill='none'%20id='canvas_background'%20height='402'%20width='582'%20y='-1'%20x='-1'/%3e%3c/g%3e%3cg%3e%3ctitle%3eLayer%201%3c/title%3e%3cpath%20fill='%236366f1'%20id='svg_1'%20d='m24,57a4,4%200%200%201%20-4,-4l0,-40a4,4%200%200%201%208,0l0,40a4,4%200%200%201%20-4,4z'%20class='cls-1'/%3e%3cpath%20fill='%236366f1'%20id='svg_2'%20d='m8,57a4,4%200%200%201%20-4,-4l0,-17a4,4%200%200%201%208,0l0,17a4,4%200%200%201%20-4,4z'%20class='cls-1'/%3e%3cpath%20fill='%236366f1'%20id='svg_3'%20d='m56,57a4,4%200%200%201%20-4,-4l0,-12a4,4%200%200%201%208,0l0,12a4,4%200%200%201%20-4,4z'%20class='cls-1'/%3e%3cpath%20fill='%236366f1'%20id='svg_4'%20d='m40,57a4,4%200%200%201%20-4,-4l0,-25a4,4%200%200%201%208,0l0,25a4,4%200%200%201%20-4,4z'%20class='cls-2'/%3e%3c/g%3e%3c/svg%3e"
                                class="w-6 h-6" alt="">
                            <span
                                class="inline-flex items-center justify-center w-fit bg-primary/10  text-primary text-sm font-medium rounded-xl border border-primary/10 px-2 py-0.5">Results</span>
                        </div>

                        <h4 class="text-s font-semibold">Question?
                        </h4>
                        <div class="flex gap-2 justify-center items-center">
                            <span class="flex items-center gap-1 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-calendar h-3 w-3" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                </svg>
                                time
                            </span>

                            <span class="flex items-center gap-1 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-clock h-3 w-3" aria-hidden="true">
                                    <path d="M12 6v6l4 2"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                Acitve
                            </span>
                        </div>
                    </div>

                    <div class="flex  gap-2 ">
                        <button class=" inline-flex items-center justify-center gap-2 bg-white px-3 py-1 rounded-lg border border-primary/15
                        hover:bg-primary/20 hover:text-blue-800
                            transform transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2 h-4 w-4 mr-2"
                                aria-hidden="true">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                            Share
                        </button>

                        <button class="inline-flex items-center justify-center gap-2 bg-white px-3 py-1 rounded-lg border border-primary/15
                        hover:bg-primary/20 hover:text-blue-800
                            transform transition-all duration-300">
                            <svg xmlns=" http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-download h-4 w-4 mr-2" aria-hidden="true">
                                <path d="M12 15V3"></path>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <path d="m7 10 5 5 5-5"></path>
                            </svg>
                            Export
                        </button>
                    </div>
                </div>

                <div class="grid lg:grid-cols-4 gap-6">

                    <div class="lg:col-span-1  space-y-4">
                        <div
                            data-aos="fade-up" 
                            data-aos-delay="300"
                            class="flex gap-6 flex-col  bg-white p-6 py-5 border border-gray-300 rounded-lg shadow-md ">

                            <div class="flex justify-between items-center">
                                <div class=" flex flex-col">
                                    <span class="text-2xl font-bold">0</span>
                                    <span class="text-sm text-gray-500">Total Responses</span>
                                </div>

                                <div class="bg-primary/20 p-3 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-users h-5 w-5 text-primary"
                                        aria-hidden="true">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up" 
                            data-aos-delay="400"
                            class="flex flex-col gap-6  bg-white p-6 py-5 border border-gray-300 rounded-lg shadow-md ">
                            <div class="flex justify-between items-center">
                                <div class="flex flex-col ">
                                    <span class="text-2xl font-bold">0</span>
                                    <span class="text-sm text-gray-500">Answer Options</span>
                                </div>

                                <div class="bg-emerald-100 p-3 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-target h-5 w-5 text-emerald-600"
                                        aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="6"></circle>
                                        <circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div 
                            data-aos="fade-up" 
                            data-aos-delay="450"
                            class="flex flex-col justify-between  bg-white p-6 py-5 border border-gray-300 rounded-lg shadow-md ">
                            <div class="flex gap-2 justify-between items-center">
                                <div class="flex flex-col  ">
                                    <span class="text-2xl font-bold">0</span>
                                    <span class="text-sm text-gray-500">Avg. per Option</span>
                                </div>

                                <div class="bg-amber-100 p-3 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-trending-up h-5 w-5 text-amber-600"
                                        aria-hidden="true">
                                        <path d="M16 7h6v6"></path>
                                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3">
                        <div
                            data-aos="fade-left" 
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            class="flex flex-col bg-white border border-gray-200 rounded-xl shadow-md gap-3 pt-6 space-y-6  px-6 pb-6">

                            <h4 class=" inline-flex  gap-2 items-center m-0">
                                <img :src="blackBar" class="w-6 h-6" alt="">
                                Response Breakdown
                            </h4>
                            <!-- no resonse -->
                            <div class="hidden flex flex-col justify-center items-center gap-4 pb-6 ">
                                <div class="bg-gray-100 text-gray-500 p-4 rounded-full">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class=" lucide lucide-trending-up h-8 w-8 text-muted-foreground"
                                        aria-hidden="true">
                                        <path d="M16 7h6v6"></path>
                                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                </div>

                                <h5 class="font-semibold">No responses yet</h5>
                                <p class="text-sm text-gray-400">Share your poll to start collecting valuable insights
                                    from
                                    your
                                    audience.</p>

                                <button class="inline-flex items-center justify-center gap-2 bg-primary text-white px-3 py-2 rounded-lg border border-primary/15
                        hover:bg-primary/20 hover:text-blue-800
                            transform transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2 h-4 w-4 mr-2"
                                        aria-hidden="true">
                                        <circle cx="18" cy="5" r="3"></circle>
                                        <circle cx="6" cy="12" r="3"></circle>
                                        <circle cx="18" cy="19" r="3"></circle>
                                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                    </svg>
                                    Share Poll
                                </button>

                            </div>
                            <!-- with response -->

                            <div class="space-y-6 ">

                                <div 
                                    data-aos="slide-right" 
                                    data-aos-delay="600"
                                    class="space-y-3 hover:scale-[1.01] transition-all duration-300">

                                    <div></div>

                                    <div class="flex gap-3 justify-start items-center">

                                        <div
                                            class="w-8 h-8 bg-primary text-white font-medium  flex items-center justify-center rounded-full ">
                                            1</div>

                                        <p class="font-medium text-primary text-sm">Options</p>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-trophy h-4 w-4 text-amber-500" aria-hidden="true">
                                            <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                                            <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                                            <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                                            <path d="M4 22h16"></path>
                                            <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                                            <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                                        </svg>

                                        <div class="ml-auto flex flex-col justify-start items-center">
                                            <span class="text-primary font-bold text-lg ">75%</span>
                                            <span class="text-sm  text-gray-500">vote 1</span>
                                        </div>

                                    </div>

                                    <!-- progress bar -->
                                    <div class="relative w-full bg-primary/10 rounded-full h-3 p-1.5 ">
                                        <!-- Outer bar (background) -->

                                        <div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                            class="absolute top-0 left-0 h-3 bg-primary rounded-full transition-all duration-500 ease-in-out "
                                            style="width: 75%;">
                                        </div>
                                    </div>

                                </div>
                                <div 
                                    data-aos="slide-right" 
                                    data-aos-delay="700"
                                    class="space-y-3 hover:scale-[1.01] transition-all duration-300">

                                    <div class="flex gap-3 justify-start items-center">

                                        <div
                                            class="w-8 h-8 bg-primary text-white font-medium  flex items-center justify-center rounded-full ">
                                            1</div>

                                        <p class="font-medium text-primary text-sm">Options</p>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="hidden lucide lucide-trophy h-4 w-4 text-amber-500"
                                            aria-hidden="true">
                                            <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                                            <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                                            <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                                            <path d="M4 22h16"></path>
                                            <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                                            <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                                        </svg>

                                        <div class="ml-auto flex flex-col justify-start items-center">
                                            <span class="text-primary font-bold text-lg ">75%</span>
                                            <span class="text-sm  text-gray-500">vote 1</span>
                                        </div>

                                    </div>

                                    <!-- progress bar -->
                                    <div class="relative w-full bg-primary/10 rounded-full h-3 p-1.5 ">
                                        <!-- Outer bar (background) -->

                                        <div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                            class="absolute top-0 left-0 h-3 bg-primary rounded-full transition-all duration-500 ease-in-out "
                                            style="width: 75%;">
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </MainLayout>
</template>