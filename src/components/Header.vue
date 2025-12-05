<script setup>
import barcahrtIcon from '../assets/icons/barchart.svg'
import iconfinder from '../assets/icons/iconfinder-icon.svg'
import arrowIcon from '../assets/icons/arrow.svg';
import searchIcon from '../assets/icons/magnifier_search_zoom_icon.svg';
import notificationIcon from '../assets/icons/alarm_alert_attention_bell_clock_icon.svg';
import settingIcon from '../assets/icons/gear_setting_settings_tools_icon.svg';
</script>

<template>
    <div class="max-w-7xl mx-auto px-6 py-4 ">
    <nav class="flex flex-row justify-between   items-center  ">
        <!-- left -->
        <div
            class="transform transition-transform duration-600 hover:scale-110 flex flex-row gap-3 bg-muted-50  justify-baseline align-baseline ">

            <div class="bg-primary/10 rounded-lg p-2 ">
                <!-- <BarChartIcon/> -->
                <img :src="barcahrtIcon" class="w-8 h-8 " alt="">
            </div>

            <div class="flex flex-col justify-end align-middle">
                <p class="text-xl font-semibold">PollPro</p>
                <p class="text-xs text-gray-400 m-0 p-0">Professional Polling Platform</p>
            </div>

        </div>

        <!-- middle -->

        <div class="hidden md:flex flex-row  justify-between  gap-6">

            <div class="flex flex-row justify-center items-baseline gap-2  bg-gray-50 px-3 py-2 rounded-lg">
                <img :src="barcahrtIcon" class="w-3.5 h-3.5 " alt="">
                <span class="text-sm font-medium m-0 p-0">0</span>
                <p class="text-xs text-gray-400 m-0 p-0">Total Polls</p>
            </div>

            <div class="flex flex-row justify-center items-baseline gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                <img :src="iconfinder" class="w-3.5 h-3.5 " alt="">
                <span class="text-sm font-medium m-0 p-0">0</span>
                <p class="text-xs text-gray-400 m-0 p-0">Total Votes</p>
            </div>


            <div class="flex flex-row justify-center items-baseline gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                <img :src="arrowIcon" class="w-3.5 h-3.5 " alt="">
                <span class="text-sm font-medium m-0 p-0">0</span>
                <p class="text-xs text-gray-400 m-0 p-0">Active</p>
            </div>


        </div>

        <!-- right -->

        <div class="flex  items-center  w-auto gap-2 md:gap-4">
            <div class="flex gap-3 md:gap-6 transform duration-200 ">
            <button class="items-center h-8  text-sm transition-all hover:bg-primary/10 rounded-md "><img :src="searchIcon" class="w-4 h-4 " alt=""></button>

            <button class="items-center h-8  text-sm transition-all hover:bg-primary/10 rounded-md "><img :src="notificationIcon" class="w-4 h-4  " alt=""></button>
            <button class="items-center h-8  text-sm transition-all hover:bg-primary/10 rounded-md "><img :src="settingIcon" class="w-4 h-4 " alt=""></button>
                </div>
            <div class="h-6 w-px border-gray-400 border"></div>

            <div>Auth </div>
                
        </div>
    </nav>
    </div>
</template>