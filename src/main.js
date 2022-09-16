import { createApp, VueElement } from "vue";
import App from "./App.vue";
import "./css";


new VueElement({
    render: (h) =>h(app),
}).mount("#app");
createApp(App).mount("#app");
