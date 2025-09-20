<script setup>
import { motion } from 'motion-v'
import { AtomSpinner } from 'epic-spinners'
</script>

<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">


    <atom-spinner :animation-duration="1000" :size="50" color="#FFFFFF" />

  </div>
</template>
