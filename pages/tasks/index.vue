<template>
    <div class="container-xxl flex-grow-1 container-p-y">

        <!-- Bordered Table -->
        <div class="card">
            <h5 class="card-header">Task List</h5>
            <div class="card-body">
                <div class="table-responsive text-nowrap">
                    <DataTable :columns="taskColumns" :data="tasks" class="table table-bordered" style="width:100%">
                    </DataTable>
                </div>
            </div>
        </div>
        <!--/ Bordered Table -->
    </div>
</template>

<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import useVuelidate from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';

DataTable.use(DataTablesCore);

useHead({
    title: "Task List",
});

definePageMeta({
    middleware: ["auth"],
});

const config = useRuntimeConfig();
const auth = useAuthStore();
const task = useTaskStore();

const isModalActive = ref(false);
const addTaskModalTitle = "Add Task";

const taskColumns = [
    { title: "Name", data: "attributes.name" },
    { title: "Priority", data: "attributes.priority" },
    { title: "Description", data: "attributes.description" }
];

const toggleModal = () => {
    isModalActive.value = !isModalActive.value;
}

// Fetch all tasks
const { data: tasks, pending, refresh: refreshTask } = await useFetch("/tasks", {
    lazy: true,
    baseURL: config.public.apiBase,
    headers: { "Authorization": `${auth.savedToken}` },
    transform: (_tasks: any) => _tasks.data,
    server: false
});


const priorityOptions = ref([
    { text: "Select priority", value: '' },
    { text: 'Low', value: 'low' },
    { text: 'Medium', value: 'medium' },
    { text: 'High', value: 'high' }
])

const form = ref({
    name: "",
    priority: "",
    description: ""
});

const rules = {
    name: { required: helpers.withMessage(emptyMsg("Name"), required) },
    priority: { required: helpers.withMessage(emptyMsg("Priority", true), required) },
    description: { required: helpers.withMessage(emptyMsg("Description"), required) }
};

function emptyMsg(field: string, option: boolean = false): string {
    if (option) {
        return `Please select ${field}`;
    }
    return `${field} cannot be empty`;
}

const v$ = useVuelidate(rules, form);

// Add task
const handleTaskSubmitted = async () => {
    const result = await v$.value.$validate();
    if (result) {
        task.insertTask(form.value);
        toggleModal();
        refreshTask();
        await nextTick();
        form.value.name = '';
        form.value.description = '';
        form.value.priority = '';
        v$.value.$reset();
    }

}

// Edit Task
const handleTaskUpdated = (id: number) => {
    console.log(id);
    task.getTask(id);
};

// Delete Task
const handleTaskDeleted = (id: number) => {
    console.log(id);
};
</script>

<style scoped></style>