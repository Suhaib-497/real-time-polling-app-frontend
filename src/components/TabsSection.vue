<script setup>
import { ref } from 'vue';
import BarChartIcon from '../assets/icons/blackBar.svg';
import PlusIcon from '../assets/icons/plus_round_icon.svg';
import AnalysisIcon from '../assets/icons/graph_analysis_analytics_icon.svg';

const activeTab = ref('dashbord');
</script>

<template>
    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center  gap-6 ">
        <div class="flex flex-col gap-2">
            <span class="text-xl font-semibold">
                <slot name="title">
                    Dashboard
                </slot>
            </span>
            <span class=" text-gray-400 ">
                <slot name="subtitle">
                    Manage your polls, track engagement, and analyze results.
                </slot>
            </span>
        </div>

        <div class="flex gap-6">

            <router-link to="/" role="tab" :aria-selected="$route.path === '/'"
                :data-state="$route.path === '/' ? 'active' : 'inactive'" class="flex items-center 
                    gap-2 justify-center text-sm font-medium rounded-xl border border-transparent px-2 py-1 h-[calc(100%-1px)] 
         transition-[color,box-shadow] 
         text-foreground  
         focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:ring-ring focus-visible:outline-ring
         disabled:pointer-events-none disabled:opacity-50
         
          data-[state=active]:shadow-sm ">
                <img :src="BarChartIcon" class="w-4 h-4" alt="">
                <span class="hidden sm:inline">Dashboard</span>
            </router-link>


            <router-link to="/create" role="tab" :aria-selected="$route.path === '/create'"
                :data-state="$route.path === '/create' ? 'active' : 'inactive'" class="flex items-center gap-2 justify-center text-sm font-medium rounded-xl border border-transparent px-2 py-1 h-[calc(100%-1px)] 
                    transition-[color,box-shadow] 
                    text-foreground  
                    focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:ring-ring focus-visible:outline-ring
                    disabled:pointer-events-none disabled:opacity-50
                    data-[state=active]:shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-plus h-6 w-6" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                </svg>
                <span class="hidden sm:inline">Create</span>
            </router-link>


            <button type="button" role="tab" aria-selected="true"
                :data-state="activeTab == 'analytics' ? 'active' : 'inactive'" @click="activeTab = 'analytics'" class="flex items-center 
                    gap-2 justify-center text-sm font-medium rounded-xl border border-transparent px-2 py-1 h-[calc(100%-1px)] 
         transition-[color,box-shadow] 
         text-foreground  
         focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:ring-ring focus-visible:outline-ring
         disabled:pointer-events-none disabled:opacity-50
         
          data-[state=active]:shadow-sm ">
                <img :src="AnalysisIcon" class="w-6 h-6" alt="">
                <span class="hidden sm:inline">Analytics</span>
            </button>




        </div>

    </div>
</template>