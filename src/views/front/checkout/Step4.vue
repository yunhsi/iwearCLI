<template>
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
        <CheckoutSteps step4Class="active" />
        <!-- 4. 完成訂單 -->
        <div class="row pt-4">
          <div class="col-md-7">
            <OrderInfo title="訂單明細" :order="order" />
          </div>
          <div class="col-md-5">
            <PaymentInfo :id="id" :order="order" />
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
import PaymentInfo from "@/components/widget/PaymentInfo.vue";
import Footer from "@/components/front/Footer.vue";
import GoTop from "@/components/widget/GoTop.vue";

import { getOrder } from "@/api/order";
export default {
  components: {
    Navbar,
    CheckoutSteps,
    OrderInfo,
    PaymentInfo,
    Footer,
    GoTop,
  },
  data() {
    return {
      order: {},
    };
  },
  computed: {
    // 訂單 id
    id() {
      return this.$route.params.orderId;
    },
  },
  mounted() {
    this.requestOrder();
  },
  methods: {
    // 取得訂單列表
    async requestOrder() {
      try {
        let res = await getOrder(this.id);
        if (res.data.success) {
          this.order = res.data.order;
        }
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
