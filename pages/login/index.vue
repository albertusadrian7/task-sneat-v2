<template>
    <div>
        <h4 class="mb-2">Welcome to ToDo! 👋</h4>
        <p class="mb-4">Please sign-in to your account and start the adventure</p>
        <form id="formAuthentication" class="mb-3" @submit.prevent="handleLogin">
            <div class="mb-3">
                <label for="email" class="form-label">Email or Username</label>
                <input required v-model="form.email" :disabled="auth.isLoading" type="email" class="form-control"
                    id="email" name="email" placeholder="Enter your email" autofocus />
            </div>
            <div class="mb-3 form-password-toggle">
                <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">Password</label>
                    <a href="auth-forgot-password-basic.html">
                        <small>Forgot Password?</small>
                    </a>
                </div>
                <div class="input-group input-group-merge">
                    <input required v-model="form.password" :disabled="auth.isLoading" type="password" id="password"
                        class="form-control" name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password" />
                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                </div>
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember-me" />
                    <label class="form-check-label" for="remember-me">&nbsp;Remember Me </label>
                </div>
            </div>
            <div class="mb-3">
                <button v-if="auth.isLoading" class="btn btn-primary w-100" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">&nbsp;Loading...</span>
                </button>
                <button v-else class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
            </div>

        </form>

        <p class="text-center">
            <span>New on our platform?</span>
            <NuxtLink to="/register">
                <span>&nbsp;Create an account</span>
            </NuxtLink>
        </p>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore';

definePageMeta({
    layout: "default-auth",
    middleware: ["guest"]
});

const auth = useAuthStore();

const form = ref({
    email: "",
    password: "",
});

async function handleLogin() {
    await auth.login(form.value);
}
</script>

<style scoped></style>