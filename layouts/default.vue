<template>
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">

            <!-- Menu -->
            <AppSidebar />
            <!-- / Menu -->

            <!-- Layout container -->
            <div class="layout-page">

                <!-- Navbar -->
                <AppNavbar />
                <!-- / Navbar -->

                <!-- Content wrapper -->
                <div class="content-wrapper">
                    <!-- Content -->
                    <slot />
                    <!-- / Content -->

                    <!-- Footer -->
                    <!-- <AppFooter /> -->
                    <!-- / Footer -->

                    <div class="content-backdrop fade"></div>
                </div>
                <!-- Content wrapper -->
            </div>
            <!-- / Layout page -->
        </div>

        <!-- Overlay -->
        <div class="layout-overlay layout-menu-toggle"></div>
    </div>
    <!-- / Layout wrapper -->
</template>

<script setup lang="ts">
useHead({
    script: [
    // Config
    {
      src: "/sneat-1.0.0/assets/js/config.js",
      tagPosition: 'head'
    },
    // Main JS
    {
      src: '/sneat-1.0.0/assets/js/main.js',
      tagPosition: 'bodyClose'
    },
  ]
});
</script>

<style scoped></style>