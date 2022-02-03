import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import LoadScript from "vue-plugin-load-script";




// ROUTING MANAGEMENT
//      ROUTING PAGES
import HomePage from './components/HomePage/HomePage.vue';
import AboutPage from './components/AboutPage/AboutPage.vue';
import EventsPage from './components/EventsPage/EventsPage.vue';
import GalleryPage from './components/GalleryPage/GalleryPage.vue';
import SponsorsPage from './components/SponsorsPage/SponsorsPage.vue';
import TeamPage from './components/TeamPage/TeamPage.vue';
import ProfilePage from './components/ProfilePage/ProfilePage.vue';
import JoinPage from './components/JoinPage/JoinPage.vue';

//      ROUTES
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', alias: '/home', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/:eventType', alias: '/home/:eventType', component: EventsPage, props: true},
        { path: '/gallery', component: GalleryPage },
        { path: '/sponsors', component: SponsorsPage },
        { path: '/team', component: TeamPage },
        { path: '/profile', component: ProfilePage },
        { path: '/join', component: JoinPage },
    ]
})


// BASE COMPONENTS
import BaseHeader from './components/UI/BaseHeader.vue';
import BaseFooter from './components/UI/BaseFooter.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

// BASE COMPONENTS REGISTRATION
app.component('base-header', BaseHeader);
app.component('base-footer', BaseFooter);
app.component('base-dialog', BaseDialog);


// APP USED COMPONENTS
app.use(router); 
app.use(LoadScript)

app.mount('#app')
 