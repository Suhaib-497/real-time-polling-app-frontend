<script setup lang="ts">
const props = defineProps({
    optionId: [String, Number]
})
import { computed, onMounted, ref } from 'vue';
import TabsSection from '../components/TabsSection.vue';
import MainLayout from '../layouts/MainLayout.vue';
import axiosClient from '../api/axiosClient';
import { useRouter } from 'vue-router';


const totalVotes = ref(0)
const questions = ref([]);
const router = useRouter();
const selectedOption = ref('');
// console.log(polls.options);

onMounted(async () => {
    // console.log('optionId prop:', props.optionId); // should log 12

    window.Echo.channel('votes')
        .listen('.VoteCast', (e: any) => {
            console.log('Vote received:', e)
            totalVotes.value++;
            // Example: update your options or vote counts here
        })




    try {
        const token = localStorage.getItem("token");
        const response = await axiosClient.get(`/show/${props.optionId}`);
        questions.value = response.data;
        console.log(questions.value.questions)

    } catch (error) {
        console.error('Error fetching data:', error);
    }





})

const submitForm = async () => {

    try {
        if (!selectedOption.value) {
            // simple client-side validation
            alert('Please select an option before submitting your vote.');
            return;
        }

        console.log('Selected Option ID:', selectedOption.value);
        await axiosClient.post(`/polls/${selectedOption.value}/vote`)
        setTimeout(() => {
            // navigate to results page for this poll
            router.push(`/result/${props.optionId}`);
        }, 500)
    } catch (error) {
        console.error('Error submitting vote:', error);

    }

    // console.log(selectedOption.value)
}
</script>

<template>
    <MainLayout>
        <div class="flex flex-col gap-8 w-full">
            <TabsSection data-aos="fade-down" data-aos-duration="800">
                <template #title>
                    Cast Your Voice
                </template>

                <template #subtitle>
                    Your participation helps build better insights.
                </template>
            </TabsSection>

            <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="200">
                <router-link to="/" role="tab" aria-selected="true" class="inline-flex items-center  
                    gap-1 justify-center text-sm font-medium rounded-lg border border-gray-200 px-2 py-2 shadow-sm
                    text-foreground  
                    hover:-translate-x-1
                    disabled:pointer-events-none disabled:opacity-50
                    hover:bg-primary/20 hover:text-blue-800
                    transform transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-arrow-left h-4 w-4 mr-2" aria-hidden="true">
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path>
                    </svg>
                    Back to Dashboard
                </router-link>
            </div>

            <div class="max-w-2xl mx-auto space-y-6 w-full">
                <div class="border border-gray-200 bg-white shadow-md transition-all duration-200 rounded-xl p-6 w-full"
                    data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
                    <form class="flex flex-col justify-center items-center align-middle gap-4"
                        @submit.prevent="submitForm">

                        <div class="flex flex-col items-center justify-center gap-2" data-aos="fade-up"
                            data-aos-duration="600" data-aos-delay="600">
                            <h4 class="inline-flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-vote h-5 w-5 text-primary"
                                    aria-hidden="true">
                                    <path d="m9 12 2 2 4-4"></path>
                                    <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>
                                    <path d="M22 19H2"></path>
                                </svg>

                                {{ questions.questions }}
                            </h4>

                            <p class="inline-flex items-center justify-center gap-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-users h-4 w-4" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                                0 total votes so far
                            </p>
                        </div>
                        <!-- v-model="selectedOption"  -->
                        <div v-for="option in questions.options" :key="option.id" class="w-full space-y-4">
                            <label tabindex="0" class="group flex items-center gap-2 border border-gray-200 w-full rounded-lg p-4 text-sm cursor-pointer
                                transition-all duration-200 
                                hover:border-primary/40 hover:bg-indigo-50
                                hover:scale-[1.02]
                                focus-within:border-primary focus-within:bg-indigo-50 focus-within:shadow-md"
                                data-aos="slide-right" data-aos-duration="600" data-aos-delay="800">
                                <input :value="option.id" type="radio" v-model="selectedOption" name="pollOption"
                                    class="w-4 h-4 border border-primary rounded-full" />
                                <span class="ml-2">{{ option.option_text }}</span>
                            </label>


                        </div>

                        <button type="submit" class="inline-flex items-center justify-center gap-2 text-white text-sm px-3 py-1 rounded-lg w-full shadow-md
                            bg-gradient-to-r from-primary to-purple-600
                            hover:scale-[1.02]
                            transition-all duration-200" data-aos="fade-up" data-aos-duration="700"
                            data-aos-delay="1000">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-vote h-4 w-4" aria-hidden="true">
                                <path d="m9 12 2 2 4-4"></path>
                                <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>
                                <path d="M22 19H2"></path>
                            </svg>
                            Cast your Vote
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </MainLayout>
</template>