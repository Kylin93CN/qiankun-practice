import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/about', component: '@/pages/about' },
        { path: '/react', component: '@/pages/react', exact: false  },
        { path: '/vue', component: '@/pages/vue', exact: false  },
      ],
    }, 
  ],
  fastRefresh: {},
});
