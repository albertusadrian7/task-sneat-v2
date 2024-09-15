export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();

    const loadMainScript = () => {
        const script = document.createElement('script');
        script.src = '/sneat-1.0.0/assets/js/main.js'; // Adjust the path to your main.js file
        script.defer = true;
        document.body.appendChild(script);
    };

    // Load main.js when transitioning to the default layout
    router.beforeEach((to, from, next) => {
        const isAuthLayout = from.name === 'default-auth';
        const isDefaultLayout = to.name === 'default';

        if (isAuthLayout && isDefaultLayout) {
            loadMainScript();
        }

        next();
    });
});