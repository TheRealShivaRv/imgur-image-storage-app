import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import AuthHandler from './components/AuthHandler'
import VueRouter from 'vue-router'
import ImageList from './components/ImageList.vue'
import UploadForm from './components/UploadForm.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: 'oauth2/callback*', component: AuthHandler },
        { path: '/', component: ImageList },
        { path: '/upload', component: UploadForm }
    ]
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')