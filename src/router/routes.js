import MainLayout from '../layouts/MainLayout.vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

const routes = [
    {
      path: '',
      title: 'Home',
      icon: 'home',
      redirect: '/home',
      component: MainLayout,
      children: [
        { path: '/home', name: 'home', title: 'Home', component: Home, props: true },
        { path: '/about', name: 'about', title: 'About', component: About, props: true },
      ]
  },
]

export default routes;