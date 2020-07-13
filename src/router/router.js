import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';


Vue.use(VueRouter);

console.log(routes)

export default new VueRouter({
    routes
});