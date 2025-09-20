<script setup>
const { questions } = defineProps(['questions']);
import { usePollStore } from '../stories/pollStore'
// console.log(this.questions);
// console.log(questions[0]);

const pollStore = usePollStore();

function goToVote(Polls) {
    pollStore.setPolls(Polls);
}

</script>
<template>
    <div class="flex flex-row justify-between items-center  gap-6 ">
        <div class="flex flex-col ">
            <span class=" font-bold">Recent Polls</span>
            <span class="text-sm text-gray-400 ">1 poll created </span>
        </div>

        <div>
            <button type="button" role="tab" aria-selected="true" class="inline-flex items-center 
                    gap-2 justify-center text-sm font-medium rounded-lg  border border-gray-300 px-2 py-1 
         
         text-foreground  
         focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:ring-ring focus-visible:outline-ring
         disabled:pointer-events-none disabled:opacity-50
          hover:bg-primary/20 hover:text-blue-800
                            transform transition-all duration-300
         
         ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-trending-up h-4 w-4 mr-2" aria-hidden="true">
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                </svg>
                Sort by Engagement
            </button>






        </div>

    </div>


    <div v-for="question in questions"
        class="group border border-gray-300 bg-white  shadow-md transition-all duration-400 rounded-xl p-6  w-full hover:-translate-y-2 hover:scale-[1.01] ">
        <div class="  flex flex-col justify-center  align-middle gap-4 ">


            <div class="flex justify-between">
                <div class="flex flex-col gap-2 ">
                    <p class=" text-lg leading-tight group-hover:text-primary">{{ question.question }}</p>

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
                <div class="flex gap-2 justify-between items-center">
                    <span class="text-sm text-gray-800 bg-gray-100 px-2 py-1 rounded-full">None</span>
                    <div class="hidden">:</div>
                </div>
            </div>

            <div class="flex justify-evenly bg-[#f5f5f531] p-2 rounded-sm ">

                <div class="flex flex-col  justify-center items-center gap-1">
                    <span class="inline-flex items-center text-gray-500 text-sm gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-users h-3 w-3" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        Responses
                    </span>

                    <span class="font-semibold">0</span>
                </div>


                <div class="flex flex-col  justify-center items-center gap-1">
                    <span class="inline-flex items-center text-gray-500 text-sm gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-message-square h-3 w-3" aria-hidden="true">
                            <path
                                d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z">
                            </path>
                        </svg>
                        Options
                    </span>

                    <span class="font-semibold">{{ question.options.length }}</span>
                </div>



                <div class="flex flex-col  justify-center items-center gap-1">
                    <span class="inline-flex items-center text-gray-500 text-sm gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-trending-up h-3 w-3" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        Leading
                    </span>

                    <span class="font-semibold">None</span>
                </div>

            </div>

            <div class="flex gap-2 items-center">
                <router-link :to="{ name: 'CastVote' }" @click.native="goToVote(question)" class=" inline-flex gap-2 justify-center items-center  text-white bg-primary border border-gray-200 
                 font-medium text-sm  w-full rounded-lg py-1 
                    hover:shadow-sm
                            transform transition-all duration-300 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-vote h-4 w-4 mr-2" aria-hidden="true">
                        <path d="m9 12 2 2 4-4"></path>
                        <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>
                        <path d="M22 19H2"></path>
                    </svg>
                    Vote Now
                </router-link>

                <router-link to="/result" class="inline-flex justify-center items-center bg-gray-50 border border-gray-200 text-sm  w-full rounded-lg py-1 font-medium
                            hover:bg-primary/20 hover:text-blue-800
                            transform transition-all duration-300 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-eye h-4 w-4 mr-2" aria-hidden="true">
                        <path
                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
                        </path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    View Results
                </router-link>
            </div>


        </div>
    </div>
</template>