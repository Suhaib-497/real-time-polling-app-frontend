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

// Editing state: when editing an existing poll/draft
const editingId = ref<number | null>(null);
// metadata per option to keep existing DB ids
const optionsMeta = ref<Array<{ id?: number | null }>>([]);
// ids of options marked for deletion
const deletedOptionIds = ref<number[]>([]);

// const countOptions = ref(checkInputValue.options.length);

const addNewOption = () => {
    checkInputValue.options.push('');
    optionsMeta.value.push({});
};

onMounted(() => {
    // If a draft was stored for editing, load it into the form
    try {
        const raw = localStorage.getItem('editingDraft');
        if (!raw) return;
        const draft = JSON.parse(raw);
        if (draft?.id) editingId.value = draft.id;
        if (draft?.question) checkInputValue.question = draft.question;

        if (Array.isArray(draft?.options)) {
            // options may be objects or strings; keep meta for ids
            const opts: string[] = [];
            const meta: Array<{ id?: number | null }> = [];
            for (const o of draft.options) {
                if (o == null) {
                    opts.push('');
                    meta.push({});
                    continue;
                }
                if (typeof o === 'string') {
                    opts.push(o);
                    meta.push({});
                    continue;
                }
                // object
                opts.push(o.option_text || o.text || o.option || '');
                meta.push({ id: o.id ?? null });
            }
            // ensure at least two options
            if (opts.length < 2) {
                while (opts.length < 2) {
                    opts.push('');
                    meta.push({});
                }
            }
            checkInputValue.options.splice(0, checkInputValue.options.length, ...opts);
            optionsMeta.value.splice(0, optionsMeta.value.length, ...meta);
        }

        // remove the stored editing draft so subsequent visits don't auto-load
        localStorage.removeItem('editingDraft');
    } catch (e) {
        // ignore parse errors
        console.error('failed to load editingDraft', e);
    }
});

const removeOption = (index: number) => {
    if (checkInputValue.options.length > 2) {
        const meta = optionsMeta.value[index];
        if (meta && meta.id) {
            deletedOptionIds.value.push(meta.id as number);
        }
        checkInputValue.options.splice(index, 1);
        optionsMeta.value.splice(index, 1);
    }
};

const hasValues = () => {
    return checkInputValue.question.trim() !== '' &&
        checkInputValue.options.every(opt => opt.trim() !== '');
};


const oneHasValues = () => {
    return checkInputValue.question.trim() !== '' ||
        checkInputValue.options.some(opt => opt.trim() !== '');
};

const submitPoll = async () => {
    isCreating.value = true;
    console.log('values', checkInputValue);


    try {
        // build options payload: include existing ids and new option_texts, plus deletes
        const optionsPayload: any[] = [];
        for (let i = 0; i < checkInputValue.options.length; i++) {
            const text = checkInputValue.options[i];
            const meta = optionsMeta.value[i] || {};
            if (meta.id) {
                optionsPayload.push({ id: meta.id, option_text: text });
            } else {
                optionsPayload.push({ option_text: text });
            }
        }
        // include deletes
        for (const id of deletedOptionIds.value) {
            optionsPayload.push({ id, delete: true });
        }

        const payload: any = {
            question: checkInputValue.question,
            options: optionsPayload,
            is_published: true
        };
        if (editingId.value) payload.id = editingId.value;

        await axiosClient.post('/polls', payload);

        setTimeout(() => {
            router.push('/')
        }, 1500)
    } catch (error) {
        console.error('create poll failed', error);
    } finally {
        isCreating.value = false;
    }
};

const saveDraft = async () => {
    // only allow saving draft when there are some values
    if (!oneHasValues()) return;
    isCreating.value = true;
    try {
        // build options payload similar to submit
        const optionsPayload: any[] = [];
        for (let i = 0; i < checkInputValue.options.length; i++) {
            const text = checkInputValue.options[i];
            const meta = optionsMeta.value[i] || {};
            if (meta.id) {
                optionsPayload.push({ id: meta.id, option_text: text });
            } else {
                optionsPayload.push({ option_text: text });
            }
        }
        for (const id of deletedOptionIds.value) {
            optionsPayload.push({ id, delete: true });
        }

        const payload: any = {
            question: checkInputValue.question,
            options: optionsPayload,
            is_published: false
        };
        if (editingId.value) payload.id = editingId.value;

        await axiosClient.post('/polls', payload);

        setTimeout(() => {
            router.push('/draft');
        }, 600);
    } catch (error) {
        console.error('save draft failed', error);
    } finally {
        isCreating.value = false;
    }
};






</script>

<template>
    <MainLayout>

        <div class="flex flex-col gap-8 w-full">

            <!-- top -->
            <TabsSection />


            <div data-aos="fade-up-left"
                class="border border-gray-200 shadow-sm bg-white  transition-all duration-200 rounded-xl w-full md:w-1/2 mx-auto   ">

                <div
                    class=" bg-gradient-to-r from-primary/5 to-primary/10 flex flex-col justify-center items-center align-middle border-b border-b-gray-200  gap-3 p-6 ">

                    <!-- top -->
                    <div class="bg-primary/10 rounded-lg p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-wand-sparkles h-6 w-6 text-primary" aria-hidden="true">
                            <path
                                d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72">
                            </path>
                            <path d="m14 7 3 3"></path>
                            <path d="M5 6v4"></path>
                            <path d="M19 14v4"></path>
                            <path d="M10 2v2"></path>
                            <path d="M7 8H3"></path>
                            <path d="M21 16h-4"></path>
                            <path d="M11 3H9"></path>
                        </svg>
                    </div>

                    <h4 class="text-xl font-semibold">Create New Poll
                    </h4>
                    <p class="text-gray-500 text-sm font-semibold text-center">Design engaging questions to gather
                        valuable insights
                        from your audience</p>



                </div>



                <form @submit.prevent="submitPoll" data-aos="fade-up" class="flex flex-col p-6 gap-4">

                    <div class="flex flex-col gap-2">
                        <div class="flex  gap-2 align-bottom items-center">
                            <p class="">Poll Question</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-circle-question-mark h-4 w-4 text-gray-600"
                                aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <path d="M12 17h.01"></path>
                            </svg>
                        </div>

                        <input v-model="checkInputValue.question" type="text" class="placeholder:font-medium bg-gray-50 border border-gray-200 rounded-lg py-3 px-3 
                        focus-visible:outline-primary
                          focus-visible:ring-[3px]
                          focus-visible:border-ring
                          focus:ring-2
                          focus:ring-primary/50
                          focus-visible:ring-primary/50
                        

                        transform transition-all duration-200
                        " placeholder="What would you like to ask your audience?">


                        <p class="text-sm  text-gray-500">Keep it clear and concise. Great questions get better
                            responses.</p>
                    </div>


                    <div class="flex flex-col gap-4">

                        <div class="flex gap-2">
                            <h5 class="font-medium">Answer Options</h5>
                            <span class="  text-gray-400">( {{ checkInputValue.options.length }} )</span>
                        </div>

                        <TransitionGroup enter-active-class="transition-all duration-300"
                            enter-from-class="opacity-0 -translate-x-8" enter-to-class="opacity-100 translate-x-0"
                            leave-active-class="transition-all duration-300"
                            leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 -translate-x-8"
                            name="fade" tag="div" class="flex flex-col gap-4 justify-start  ">

                            <div v-for="(countOption, index) in checkInputValue.options" :key="index"
                                class="flex gap-2  items-center transition-all duration-200 ">

                                <p class="bg-gray-100  px-2 py-1 text-sm rounded-full">{{ index + 1 }}</p>

                                <input v-model="checkInputValue.options[index]" type="text" class="placeholder:font-medium bg-gray-50 border border-gray-200 rounded-lg py-2 px-3  w-full
                               
                                    focus-visible:outline-primary
                                    focus-visible:ring-[3px]
                                    focus-visible:border-ring
                                    focus:ring-2
                                    focus:ring-primary/50
                                    focus-visible:ring-primary/50                      
                                     transition-all  duration-200
                                    " :placeholder="`option ${index + 1} `">

                                <button v-if="checkInputValue.options.length > 2" @click="removeOption(index)" class="inline-flex justify-center items-center p-2 rounded-lg
                                hover:bg-red-50 hover:scale-[1.03] hover:text-red-500
                                 transition-all duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-x h-4 w-4 " aria-hidden="true">
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                    </svg>
                                </button>

                            </div>



                            <button @click="addNewOption()" type="button" class=" inline-flex justify-center items-center text-primary gap-2 bg-gray-50  py-2 
                                outline-2 outline-primary/50  outline-dashed rounded-lg 
                                hover:outline-primary hover:text-blue-900 
                                hover:scale-[1.01]
                                 transition-all duration-200 
                                ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-plus h-4 w-4 mr-2" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                </svg>
                                Add Another Optition
                            </button>

                            <p class="text-xs text-gray-500">Add 2-6 options. You can reorder them by dragging later.
                            </p>
                        </TransitionGroup>

                        <div class="my-4 border border-gray-200"></div>

                        <div class="flex  items-start gap-2 ">
                            <button type="button" @click="saveDraft" :disabled="!oneHasValues() || isCreating" :class="[
                                'bg-gray-50 border border-gray-200 text-sm  text-center w-full rounded-lg py-2 hover:bg-primary/20 hover:text-blue-800 transform transition-all duration-300',
                                {
                                    'opacity-100': oneHasValues(),
                                    'opacity-50': !oneHasValues(),
                                    'cursor-not-allowed': !oneHasValues() || isCreating
                                }
                            ]">
                                {{ editingId ? 'Update' : 'Save as draft' }}
                            </button>




                            <button type="submit" :disabled="!hasValues() || isCreating" :class="[
                                'inline-flex justify-center items-center gap-2 text-white bg-primary rounded-lg py-4 w-full cursor-pointer hover:shadow-md',
                                {
                                    'opacity-50 cursor-not-allowed': isCreating,
                                    'opacity-100': hasValues() && !isCreating,
                                    'opacity-50': !hasValues() && !isCreating
                                }
                            ]">
                                <AtomSpinner v-if="isCreating" :animation-duration="1000" :size="33" color="#FFFFFF" />
                                <span v-if="isCreating">{{ editingId ? 'Updating...' : 'Creating Poll...' }}</span>

                                <span v-else class="inline-flex items-center justify-center gap-2">
                                    {{ editingId ? 'Published' : 'Craft Poll' }}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-wand-sparkles h-4 w-4"
                                        aria-hidden="true">
                                        <path
                                            d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72">
                                        </path>
                                        <path d="m14 7 3 3"></path>
                                        <path d="M5 6v4"></path>
                                        <path d="M19 14v4"></path>
                                        <path d="M10 2v2"></path>
                                        <path d="M7 8H3"></path>
                                        <path d="M21 16h-4"></path>
                                        <path d="M11 3H9"></path>
                                    </svg>
                                </span>

                            </button>

                        </div>


                    </div>
                </form>
            </div>

        </div>


    </MainLayout>
</template>