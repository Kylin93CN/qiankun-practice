import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp', // app name registered
    entry: '//localhost:8888',
    container: '#microApp',
    activeRule: '/react',
  },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:9999',
  //   container: '#microApp',
  //   activeRule: '/vue',
  // },
]);

start();