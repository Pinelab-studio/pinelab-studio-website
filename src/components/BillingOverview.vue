<template>
    <section class="relative overflow-hidden" id="why-vendure">
        <div class="max-w-7xl mx-auto rounded-3xl">
            <div class="mx-auto max-w-7xl lg:px-16 md:px-12 px-8 xl:px-24 py-24">
                <div class="text-center">
                    <span class="text-sm uppercase font-medium tracking-wide text-blue-600">Monthly billing
                        report</span>
                    <h2
                        class="text-purple-900 font-semibold tracking-tight lg:text-4xl mt-6 text-3xl text-balance md:text-balance md:w-1/2 mx-auto">
                        {{ customer.toUpperCase() }}
                    </h2>
                    <p class="text-slate-500 my-5 md:text-balance md:w-1/2 mx-auto">
                        This data will not be available indefinitely. Please download it if you want to keep it.
                    </p>
                </div>

                <!-- Month selector -->
                <fieldset aria-label="Choose a memory option">
                    <RadioGroup v-model="selectedMonth" class="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
                        <RadioGroupOption as="template" v-for="month in availableMonths" :key="month.name"
                            :value="month" v-slot="{ active, checked }">
                            <div
                                :class="['cursor-pointer focus:outline-none', active ? 'ring-2 ring-blue-600 ring-offset-2' : '', checked ? 'bg-blue-600 text-white ring-0 hover:bg-blue-500' : 'bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50', !active && !checked ? 'ring-inset' : '', active && checked ? 'ring-2' : '', 'flex items-center justify-center rounded-md px-3 py-3 text-sm font-semibold uppercase sm:flex-1']">
                                {{ month.name }}</div>
                        </RadioGroupOption>
                    </RadioGroup>
                </fieldset>

                <div class="text-center mt-8">
                    <p class="text-purple-900">
                        <span class="text-5xl font-light tracking-tight">
                            <span>€ {{ totalSpent }}</span>
                        </span>
                        / <span class="text-sm text-slate-500">of € {{ maxSpent }} spent for this month
                        </span>
                    </p>
                </div>

                <!-- Time entries -->
                <div class="px-4 sm:px-6 lg:px-8 mt-8">
                    <div class="mt-8 flow-root">
                        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table class="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th scope="col"
                                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                Who</th>
                                            <th scope="col"
                                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Task
                                                Description</th>
                                            <th scope="col"
                                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Duration</th>
                                            <th scope="col"
                                                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                        <tr v-for="entry in timeEntries" :key="entry.id">
                                            <td
                                                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                {{ entry.name }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{
                            entry.description }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{
                                                entry.duration }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ entry.date
                                                }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';

const props = defineProps({
    customer: String,
});

/**
 * Set current month + the previous 6 months
 */
const availableMonths = getPastMonths(6);
const selectedMonth = ref(availableMonths.at(-1)); // Default to the last month

const totalSpent = ref(1000);
const maxSpent = ref(2000);

const timeEntries = [
    { id: Math.random(), name: 'Lindsay Walton', description: 'Front-end Developer', duration: '8:00', date: '2024/08/08' },
    { id: Math.random(), name: 'Lindsay Walton', description: 'Front-end Developer', duration: '8:00', date: '2024/08/08' },
    { id: Math.random(), name: 'Lindsay Walton', description: 'Front-end Developer', duration: '8:00', date: '2024/08/08' },
    { id: Math.random(), name: 'Lindsay Walton', description: 'Front-end Developer', duration: '8:00', date: '2024/08/08' },
    { id: Math.random(), name: 'Lindsay Walton', description: 'Front-end Developer', duration: '8:00', date: '2024/08/08' },
    { id: Math.random(), name: 'Lindsay Walton', description: 'Front-end Developer', duration: '8:00', date: '2024/08/08' },
]

// Secret key per client, so that not everyone can access timesheets
let secret: string;
// Month to display
let month: number;

onMounted(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    secret = urlSearchParams.get('k');
    month = parseInt(urlSearchParams.get('month'));
    if (!isNaN(month)) {
        selectedMonth.value = availableMonths.find(m => m.nr === month) ?? availableMonths.at(-1);
    }
    console.log(month, secret)
});

/**
 * Get the current + past X months
 */
function getPastMonths(nrOfPreviousMonths: number): { name: string, nr: number }[] {
    const currentDate = new Date();
    const months = [];
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'long' });

    for (let i = 0; i < nrOfPreviousMonths; i++) {
        // Create a new date object for the month we are interested in
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const monthName = formatter.format(date);
        const monthIndex = date.getMonth();
        months.push({ nr: monthIndex + 1, name: monthName });
    }
    return months.reverse();
}



</script>