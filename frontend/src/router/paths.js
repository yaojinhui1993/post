import Home from '@/views/Home.vue';

export default [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/Post/Index.vue')
    },
    {
      path: '/post/create',
      name: 'post.create',
      component: () => import('@/views/Post/Create.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
]