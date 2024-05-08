import { defineStore } from "pinia";

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

interface LoginSuccess {
    user: User;
    token: string;
}

interface SuccessResponse<T> {
    status: string;
    message: string | null;
    data: T;
}

interface Credentials {
    email: string;
    password: string;
};

interface LoginError {
    [key: string]: string[];
}

interface ErrorResponse<T> {
    message: string;
    errors: T;
}

export const useAuthStore = defineStore("auth", () => {
    const user = ref<User | null>(null);

    const errorMsg = ref<string | null>(null);

    const isLoggedIn = computed(() => !!user.value);

    const isLoading = ref<boolean>(false);

    //init config
    const config = useRuntimeConfig();

    const savedToken = useCookie("token", {
        watch: true,
    });

    async function login(credentials: Credentials) {
        try {
            isLoading.value = true;
            const loginSuccess: SuccessResponse<LoginSuccess> = await $fetch("/login", {
                method: "POST",
                body: credentials,
                baseURL: config.public.apiBase
            });
            if (loginSuccess.data != null) {
                const token = "Bearer " + loginSuccess.data.token;
                savedToken.value = token;
                user.value = loginSuccess.data.user;
                navigateTo("/");
            }
        } catch (error: any) {
            if (error.data != null) {
                const loginError: ErrorResponse<LoginError> = error.data;
                console.log(loginError.message);
            }
        }
        isLoading.value = false;
    }

    async function fetchUser() {
        if (savedToken.value != null) {
            try {
                const userResponse: User = await $fetch("/user", {
                    method: "GET",
                    headers: { 'Authorization': savedToken.value },
                    baseURL: config.public.apiBase
                });
                console.log(userResponse);
                if (userResponse) {
                    user.value = userResponse;
                }
            } catch (error: any) {
                console.log(error.data);
            }
        }
    }

    async function logout() {
        if (savedToken.value != null) {
            try {
                await $fetch("/logout", {
                    method: "POST",
                    headers: { Authorization: savedToken.value },
                    baseURL: config.public.apiBase
                });
                user.value = null;
                savedToken.value = null;
                navigateTo("/login");
            } catch (error: any) {
                errorMsg.value = error.value;
                console.log("Logout error:", error.value);
            }
        }
    }
    return { user, isLoading, errorMsg, isLoggedIn, savedToken, login, fetchUser, logout };
});
