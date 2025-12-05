<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import BarChartIcon from '../assets/icons/blackBar.svg';
import PlusIcon from '../assets/icons/plus_round_icon.svg';
import AnalysisIcon from '../assets/icons/graph_analysis_analytics_icon.svg';
import { reactive, ref, TransitionGroup, onMounted, } from 'vue';
import TabsSection from '../components/TabsSection.vue';
import axiosClient from '../api/axiosClient';
import { AtomSpinner } from 'epic-spinners';
import { useRouter } from 'vue-router';


const router = useRouter();
const activeTab = ref('dashbord');
const isCreating = ref(false);
const checkInputValue = reactive({
    question: '',
    options: ['', ''] // start with 2 options
});

// drafts state
const drafts = ref<any[]>([]);
const loadingDrafts = ref(true);
const draftsError = ref<string | null>(null);

// const countOptions = ref(checkInputValue.options.length);

const addNewOption = () => {
    checkInputValue.options.push('');

};

const removeOption = (index: number) => {
    if (checkInputValue.options.length > 2) {
        checkInputValue.options.splice(index, 1);

    }
};

const hasValues = () => {
    return checkInputValue.question.trim() !== '' &&
        checkInputValue.options.every(opt => opt.trim() !== '');
};

const submitPoll = async () => {
    isCreating.value = true;
    console.log('values', checkInputValue);


    try {
        await axiosClient.post('/polls', {
            question: checkInputValue.question,
            options: checkInputValue.options
        })

        setTimeout(() => {
            router.push('/')
        }, 1500)
    } catch (error) {

    }
};

// fetch drafts from backend
const fetchDrafts = async () => {
    loadingDrafts.value = true;
    draftsError.value = null;
    try {
        const res = await axiosClient.get('/polls/drafts');
        // accept both res.data = array or res.data.data
        drafts.value = Array.isArray(res?.data) ? res.data : (res?.data?.data || []);
    } catch (e: any) {
        console.error('fetch drafts failed', e);
        draftsError.value = e?.message || 'Failed to load drafts';
    } finally {
        loadingDrafts.value = false;
    }
};

onMounted(() => {
    fetchDrafts();
});

const publishDraft = async (draft: any) => {
    // validate draft has question and at least 2 non-empty options
    try {
        const question = (draft.question || '').toString().trim();
        const options = Array.isArray(draft.options) ? draft.options : [];
        const validOptions = options.filter((o: any) => {
            const text = (o.option_text || o.text || o || '').toString().trim();
            return text.length > 0;
        });

        if (!question) {
            alert('Cannot publish: question is required.');
            return;
        }

        if (validOptions.length < 2) {
            alert('Cannot publish: please provide at least two non-empty options.');
            return;
        }

        const id = draft.id;
        await axiosClient.patch(`/polls/${id}`, { is_published: true });
        drafts.value = drafts.value.filter(d => String(d.id) !== String(id));
    } catch (e) {
        console.error('publish failed', e);
    }
};

const deleteDraft = async (id: number | string) => {
    try {
        await axiosClient.delete(`/polls/${id}`);
        drafts.value = drafts.value.filter(d => String(d.id) !== String(id));
    } catch (e) {
        console.error('delete failed', e);
    }
};

const editDraft = (draft: any) => {
    try { localStorage.setItem('editingDraft', JSON.stringify(draft)); } catch { }
    router.push('/create');
};

</script>

<template>
    <MainLayout>

        <div class="flex flex-col gap-8 w-full">

            <!-- top -->
            <TabsSection data-aos="fade-down" data-aos-duration="800">
                <template #title>
                    Edit Draft
                </template>

                <template #subtitle>
                    Continue working on your saved poll draft.
                </template>
            </TabsSection>



            <div data-aos="fade-up-left" class=" rounded-xl w-full   ">
                <div v-if="loadingDrafts" class="flex justify-center py-12">
                    <AtomSpinner :size="40" color="#6b7280" />
                </div>

                <div v-else-if="!drafts.length"
                    class="bg-white flex flex-col justify-center items-center align-middle rounded-xl border border-gray-200 shadow-sm transition-all duration-200   gap-3 p-6 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-file-text h-10 w-10 text-gray-600 mx-auto " aria-hidden="true">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                    </svg>

                    <h4 class="text-md font-medium">No drafts yet
                    </h4>
                    <p class="text-gray-500 text-xs font-semibold text-center">Start creating a poll and save it as a
                        draft to see
                        it here.</p>
                </div>

                <div v-else>
                    <div class="flex flex-row justify-between items-center gap-6 ">
                        <span class="font-medium">Your Drafts</span>

                        <div
                            class="flex flex-row justify-center items-baseline gap-2 bg-secondary px-2 py-1 rounded-lg">
                            <p class="text-xs text-gray-600 font-medium  m-0 p-0">{{ drafts.length }} draft{{
                                drafts.length > 1 ?
                                    's' : '' }}</p>
                        </div>

                    </div>

                    <div class="space-y-4 mt-2">
                        <TransitionGroup name="fade" tag="div">
                            <div v-for="d in drafts" :key="d.id"
                                class="group border border-gray-200 bg-white shadow-md transition-all duration-400 rounded-xl p-6 w-full">
                                <div class="flex flex-col justify-center align-middle gap-4">
                                    <div class="flex justify-between items-start">
                                        <div class="flex flex-col gap-2">
                                            <p class="text-lg leading-tight group-hover:text-primary">{{ d.question }}
                                            </p>
                                            <div class="flex gap-2 items-center text-gray-500 text-xs">
                                                <span class="flex items-center gap-1">Created: {{ new Date(d.created_at
                                                    ||
                                                    d.createdAt || d.created || '').toLocaleString() }}</span>
                                                <span class="flex items-center gap-1">•</span>
                                                <span class="flex items-center gap-1">Options: {{ (d.options ||
                                                    []).length }}</span>
                                            </div>
                                        </div>
                                        <div class="flex gap-2 justify-between items-center">
                                            <button @click="editDraft(d)"
                                                class="inline-flex gap-1 items-center text-sm font-medium bg-secondary px-2 py-1 rounded-lg border border-gray-200 hover:scale-105 transition-all duration-300"
                                                aria-label="Edit draft" title="Edit">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-pen-line h-4 w-4 mr-1" aria-hidden="true">
                                                    <path d="M13 21h8"></path>
                                                    <path
                                                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                                    </path>
                                                </svg>
                                                <span>Edit</span>
                                            </button>
                                            <button @click.prevent="deleteDraft(d.id)"
                                                class="hover:bg-red-100 hover:text-red-500 p-2 rounded-lg hover:scale-105 transition-all duration-300 "
                                                aria-label="Delete draft" title="Delete">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-trash2 h-4 w-4" aria-hidden="true">
                                                    <path d="M10 11v6"></path>
                                                    <path d="M14 11v6"></path>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                                    <path d="M3 6h18"></path>
                                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                            </button>
                                            <div class="hidden">:</div>
                                        </div>
                                    </div>

                                    <div>
                                        <p class="text-sm font-medium text-gray-500">Options:</p>
                                        <div class="flex gap-2 flex-wrap mt-2">
                                            <span v-for="(opt, i) in (d.options || [])" :key="i"
                                                class="border border-gray-200 px-3 py-0.5 rounded-lg text-xs">{{
                                                    opt.option_text || opt.text || opt
                                                }}</span>
                                        </div>
                                    </div>

                                    <div class="border-t pt-3 border-gray-200 flex items-center justify-between ">
                                        <p class="text-sm text-gray-600">Created: {{ new Date(d.created_at ||
                                            d.createdAt ||
                                            d.created || '').toLocaleString() }}</p>
                                        <button @click.prevent="publishDraft(d)"
                                            class="inline-flex items-center gap-1 text-white bg-primary text-sm font-sm px-2 py-1 rounded-lg border border-gray-200 hover:scale-105 transition-all duration-300"
                                            aria-label="Publish draft" title="Publish">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-zap h-4 w-4 mr-1" aria-hidden="true">
                                                <path
                                                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                                                </path>
                                            </svg>
                                            <span>Publish</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </TransitionGroup>
                    </div>
                </div>
            </div>






        </div>


    </MainLayout>
</template>