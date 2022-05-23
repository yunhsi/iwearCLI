import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "./vuex";

// axios
import axios from "axios";
import VueAxios from "vue-axios";

// bootstrap
import "bootstrap";

// material-icons
import "material-icons/iconfont/material-icons.css";

// hover.css
import "hover.css";

//animate
import "animate.css";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true,
});

// vueLoading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

// VueSweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// primevue
import "primevue/resources/themes/vela-green/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import PrimeVue from "primevue/config";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Button from "primevue/button";

// VeeValidate
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
// VeeValidate 驗證規則
import rules from "@vee-validate/rules";
// VeeValidate 多國語系
import { localize, setLocale } from "@vee-validate/i18n";
// VeeValidate 繁體中文語系檔案
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// 設定驗證規則
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});
// 設定配置
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
// 設定預設語系
setLocale("zh_TW");

// 千分號過濾器
import { currency } from "@/js/filters/currencyFilter.js";
// 日期過濾器
import { date } from "@/js/filters/dateFilter.js";

const app = createApp(App);
app.use(router);
app.use(Vuex);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(PrimeVue);
app.use(ToastService);
// 註冊為元件
app.component("Loading", Loading);
app.component("Toast", Toast);
app.component("Button", Button);
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
// 將過濾器註冊為全域
app.config.globalProperties.$filters = {
  currency,
  date,
};
app.mount("#app");
