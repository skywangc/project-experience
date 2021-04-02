import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    {
      path: '/',
      component: '@/layout/FrameStructure',
      routes: [
        {
          path: '/',
          redirect: '/home',
        },
        {
          path: '/home',
          component: '@/pages/home',
        },
      ],
    },
  ],
  fastRefresh: {},
});
