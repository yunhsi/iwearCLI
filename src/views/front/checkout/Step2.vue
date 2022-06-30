<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- navbar -->
  <Navbar rootClass="page-navbar" />
  <div
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="400"
    data-aos-delay="500"
  >
    <!-- main -->
    <main style="padding-top: 73px; min-height: calc(100vh - 104px)">
      <div class="container pt-4 pb-5">
        <!-- 結帳進度 -->
        <CheckoutSteps step2Class="active" />
        <!-- 2. 建立訂單 -->
        <div class="row flex-row-reverse justify-content-center pt-4">
          <!-- 訂單資訊 -->
          <div class="col-lg-5 col-md-6">
            <OrderInfo title="訂單資訊" :cart="cart" />
          </div>
          <!-- 資料填寫 -->
          <div class="col-lg-7 col-md-6">
            <Form
              v-slot="{ errors }"
              class="row g-3 pt-4 pt-md-0 small"
              @submit="requestPostOrder"
            >
              <div class="col-md-6">
                <label for="name" class="form-label">
                  收件人姓名 <span class="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  name="姓名"
                  placeholder="請輸入收件人姓名"
                  id="name"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  v-model="formData.user.name"
                  rules="required"
                />
                <ErrorMessage name="姓名" class="invalid-feedback" />
              </div>
              <div class="col-md-6">
                <label for="tel" class="form-label">
                  收件人電話 <span class="text-danger">*</span>
                </label>
                <Field
                  type="tel"
                  name="電話"
                  placeholder="請輸入收件人電話"
                  id="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  v-model="formData.user.tel"
                  rules="required|numeric|min:10"
                />
                <ErrorMessage name="電話" class="invalid-feedback" />
              </div>
              <div class="col-12">
                <label for="address" class="form-label">
                  收件人地址 <span class="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  name="地址"
                  placeholder="請輸入收件人地址"
                  id="address"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  v-model="formData.user.address"
                  rules="required"
                />
                <ErrorMessage name="地址" class="invalid-feedback" />
              </div>
              <div class="col-12">
                <label for="Email" class="form-label">
                  Email (請填寫常用信箱以追蹤出貨狀態)
                  <span class="text-danger">*</span>
                </label>
                <Field
                  type="email"
                  name="Email"
                  placeholder="請輸入 Email"
                  id="Email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['Email'] }"
                  v-model="formData.user.email"
                  rules="required|email"
                />
                <ErrorMessage name="Email" class="invalid-feedback" />
              </div>
              <div class="col-12">
                <label for="payment" class="form-label">
                  付款方式 <span class="text-danger">*</span>
                </label>
                <Field
                  as="select"
                  name="付款方式"
                  placeholder="請輸入付款方式"
                  id="payment"
                  class="form-select"
                  :class="{ 'is-invalid': errors['付款方式'] }"
                  v-model="formData.user.payment"
                  rules="required"
                >
                  <option value="" selected disabled>選擇付款方式</option>
                  <option value="信用卡">信用卡</option>
                  <option value="貨到付款">貨到付款</option>
                  <option value="ATM 匯款">ATM 匯款</option>
                </Field>
                <ErrorMessage name="付款方式" class="invalid-feedback" />
              </div>
              <div
                class="col-12 d-flex justify-content-between align-items-center"
              >
                <router-link to="/cart" class="text-muted">
                  <i class="fas fa-chevron-left me-2"></i>返回購物車
                </router-link>
                <button type="submit" class="btn btn-danger px-3">
                  建立訂單
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
    <!-- footer -->
    <Footer />
  </div>
  <!-- go top -->
  <GoTop />
</template>

<script>
import Navbar from "@/components/front/Navbar.vue";
import CheckoutSteps from "@/components/widget/CheckoutSteps.vue";
import OrderInfo from "@/components/widget/OrderInfo.vue";
import Footer from "@/components/front/Footer.vue";
import GoTop from "@/components/widget/GoTop.vue";

import { getCarts } from "@/api/cart";
import { postOrder } from "@/api/order";
export default {
  components: {
    Navbar,
    CheckoutSteps,
    OrderInfo,
    Footer,
    GoTop,
  },
  data() {
    return {
      isLoading: false,
      cart: [],
      formData: {
        user: {
          name: "",
          tel: "",
          address: "",
          email: "",
          payment: "",
        },
      },
      isGetCoupon: localStorage.getItem("isGetCoupon"),
    };
  },
  mounted() {
    this.requestCarts();
  },
  methods: {
    // 建立訂單
    async requestPostOrder() {
      let data = this.formData;
      try {
        this.isLoading = true;
        let res = await postOrder(data);
        if (res.data.success) {
          this.$router.push(`/order/${res.data.orderId}`);
          localStorage.setItem("isGetCoupon", false);
        }
        this.isLoading = false;
      } catch (err) {
        this.$swal({
          icon: "error",
          title: `${err}`,
        });
      }
    },
    // 取得購物車列表
    async requestCarts() {
      try {
        this.isLoading = true;
        let res = await getCarts();
        if (res.data.success) {
          this.cart = res.data.data;
          if (!this.cart.carts.length) {
            this.$router.push("/cart");
          }
        }
        this.isLoading = false;
      } catch (err) {
        this.$swal({
          icon: "error",
          title: `${err}`,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
