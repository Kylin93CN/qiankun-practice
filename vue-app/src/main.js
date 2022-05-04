import { createApp } from 'vue'
import './public-path';
import App from './App.vue'

let renderDom = null;
function getRenderDom(props) {
    if (renderDom) {
        return renderDom;
    }
    const { container } = props || {};
    renderDom = container ? container.querySelector('#app') : '#app'
    return renderDom;
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    createApp(App).mount(getRenderDom())
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    createApp(App).mount(getRenderDom(props))
}
export async function unmount() {
    createApp(App).unmount(getRenderDom())
    renderDom = null;
}