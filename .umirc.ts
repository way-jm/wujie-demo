import {defineConfig} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false, path: '/', component: '@/layouts/index',
      routes: [
        {path: '/', component: '@/pages/index'},
        {path: '/react16', component: '@/pages/react16/index'},
        {path: '/terminal', component: '@/pages/terminal/index'}
      ]
    }
  ],
  fastRefresh: {},
});
