<script setup>
import AOS from 'aos'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
})

</script>

<template>
  <router-view/>
</template>

<style scoped>

</style>
