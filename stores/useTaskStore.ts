import { defineStore } from "pinia";
import { useAuthStore } from "./useAuthStore";

type Task = {
    name: string;
    priority: string;
    description: string;
};

export const useTaskStore = defineStore("task", () => {
    const auth = useAuthStore();

    //init config
    const config = useRuntimeConfig();

    const errorMsg: any = ref<string | null>(null);

    async function insertTask(task: Task) {
        //init formData
        let formData = new FormData();

        console.log("Name:", task.name);

        //assign state value to formData
        formData.append('name', task.name);
        formData.append('description', task.description);
        formData.append('priority', task.priority);

        const data: any = await $fetch("/tasks", {
            method: "POST",
            headers: {
                "Authorization": `${auth.savedToken}`
            },
            body: formData,
            baseURL: config.public.apiBase
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
            // errorMsg.value = error.value;
        });
    }

    async function getTask(id: Number) {
        const data: any = await $fetch(`/tasks/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `${auth.savedToken}`
            },
            baseURL: config.public.apiBase
        }).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
            // errorMsg.value = error.value;
        });
    }

    return { errorMsg, insertTask, getTask };
});