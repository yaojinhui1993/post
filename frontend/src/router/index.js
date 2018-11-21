import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import paths from './paths';

Vue.use(Router)

const router =  new Router({
  base: '/',
  mode: "history",
  routes: paths,
  linkActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
})

router.afterEach((to, from) => {
  NProgress.done();
})

export default router;