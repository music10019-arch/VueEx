import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // <- 引入 router
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // 建議用 bundle 版本
import "bootstrap-icons/font/bootstrap-icons.css";
import ProjButton from "./components/ProjButton.vue";

createApp(App)
  .use(router) // <- 註冊 router
  .component("ProjButton", ProjButton)
  // 這樣是設成全域都可以用，全域元件
  .mount("#app");
