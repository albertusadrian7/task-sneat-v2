<template>
    <div class="container-fluid flex-grow-1 container-p-y">
        <!-- Layout Demo -->
        <div class="layout-demo-wrapper">
            <div class="layout-demo-placeholder">
                <img src="/sneat-1.0.0/assets/img/layouts/layout-fluid-light.png" class="img-fluid" alt="Layout fluid"
                    data-app-light-img="layouts/layout-fluid-light.png"
                    data-app-dark-img="layouts/layout-fluid-dark.png" />
            </div>
            <div class="layout-demo-info">
                <h4>Layout fluid</h4>
                <p>Fluid layout sets a <code>100% width</code> at each responsive breakpoint.</p>
            </div>
        </div>
        <!--/ Layout Demo -->
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "Dashboard",
});

definePageMeta({
    middleware: ["auth"]
});
</script>

<style scoped></style>