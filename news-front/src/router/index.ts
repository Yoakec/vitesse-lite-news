import {App} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import {routes} from './routes';

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export function setupRouter(app: App<Element>) {
    app.use(router);
}

export default router;