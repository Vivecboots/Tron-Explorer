import { createApp } from 'vue'
import App from './App.vue'
import TronWeb from 'tronweb';

const HttpProvider = 'https://api.trongrid.io';
const privateKey = process.env.VUE_APP_PRIVATE_KEY;

const fullNode = new TronWeb.providers.HttpProvider(HttpProvider);
const solidityNode = new TronWeb.providers.HttpProvider(HttpProvider);
const eventServer = new TronWeb.providers.HttpProvider(HttpProvider);

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

const app = createApp(App);
app.config.globalProperties.$tronWeb = tronWeb;
app.mount('#app');
