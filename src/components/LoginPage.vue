<template>
    <div class="loggin-container">
        <MicrosoftLogin/>
    </div>
</template>

<script>
    import MicrosoftLogin from './MicrosoftLogin.vue';

    export default {
        name: 'LoginPage',
        components: {
            MicrosoftLogin,
        }
    }
</script>