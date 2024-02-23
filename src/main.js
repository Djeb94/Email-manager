import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'

const CLIENT_ID = "93739110920-ojj41p4nookibc1urvt1a582nq55no7u.apps.googleusercontent.com"

createApp(App)
    .use(vue3GoogleLogin, {
        clientId: CLIENT_ID
    })
    .use(router)
    .use(store)
    .mount('#app')

export async function getUserName(tokenId) {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${tokenId}`
        }
    });
    const data = await response.json();
    return data.name;
}