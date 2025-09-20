<script setup>
import Header from '../components/Header.vue';

</script>

<template>

    <div class="bg-background min-h-screen ">

        <header class="bg-white border-b-gray-400 shadow-sm  sticky top-0 z-50 ">

            <Header />

        </header>



        <main class=" max-w-7xl mx-auto px-6 py-8">
            <slot>
                
            </slot>
        </main>


    </div>



</template>