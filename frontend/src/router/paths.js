export default [
  {
    path: '*',
    meta: {
      public: true, // Display full page.
    },
    redirect: {
      path: '/404'
    }
  },
  {
    path: '/404',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/',
    meta: {},
    name: 'Root',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/dashboard',
    meta: { breadcrumb: true },
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue')
  },

  {
    path: '/widgets/chart',
    meta: { breadcrumb: true },
    name: 'components/chart',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `@/views/widgets/Chart.vue`
    )
  },
]