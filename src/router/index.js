import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "front-main" */ "@/views/front/Home.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "front-main" */ "@/views/front/Products.vue"),
  },
  {
    path: "/product/:productId",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "front-main" */ "@/views/front/Product.vue"),
  },
  // 購物車結帳
  {
    path: "/cart",
    name: "Step1",
    component: () =>
      import(
        /* webpackChunkName: "front-checkout" */ "@/views/front/checkout/Step1.vue"
      ),
  },
  {
    path: "/order",
    name: "Step2",
    component: () =>
      import(
        /* webpackChunkName: "front-checkout" */ "@/views/front/checkout/Step2.vue"
      ),
  },
  {
    path: "/order/:orderId",
    name: "Step3",
    component: () =>
      import(
        /* webpackChunkName: "front-checkout" */ "@/views/front/checkout/Step3.vue"
      ),
  },
  {
    path: "/checkout/:orderId",
    name: "Step4",
    component: () =>
      import(
        /* webpackChunkName: "front-checkout" */ "@/views/front/checkout/Step4.vue"
      ),
  },
  // 訂單列表
  {
    path: "/unpaid",
    name: "Unpaid",
    component: () =>
      import(
        /* webpackChunkName: "front-order" */ "@/views/front/order/Unpaid.vue"
      ),
  },
  {
    path: "/paid",
    name: "Paid",
    component: () =>
      import(
        /* webpackChunkName: "front-order" */ "@/views/front/order/Paid.vue"
      ),
  },
  // 登入後台
  {
    path: "/admin/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "admin" */ "@/views/admin/Login.vue"),
  },
  // 後台
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "@/views/admin/Admin.vue"),
    children: [
      {
        path: "products",
        name: "AdminProducts",
        component: () =>
          import(/* webpackChunkName: "admin" */ "@/views/admin/Products.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "orders",
        name: "AdminOrders",
        component: () =>
          import(/* webpackChunkName: "admin" */ "@/views/admin/Orders.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "coupons",
        name: "AdminCoupons",
        component: () =>
          import(/* webpackChunkName: "admin" */ "@/views/admin/Coupons.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0, behavior: "instant" };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = "https://vue-course-api.hexschool.io/api/user/check";
    axios.post(api).then((res) => {
      if (res.data.success) {
        next();
      } else {
        next({
          path: "/admin/login",
        });
      }
    });
  } else {
    next();
  }
});

export default router;
