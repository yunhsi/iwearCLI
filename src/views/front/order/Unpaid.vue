<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- navbar -->
  <Navbar rootClass="page-navbar" />
  <div
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="400"
  >
    <!-- main -->
    <main style="padding-top: 73px; min-height: calc(100vh - 104px)">
      <div class="container pt-4 pb-5">
        <!-- 搜尋 -->
        <div class="search-bar mx-2 mx-md-0 mb-md-4">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb small">
              <li class="breadcrumb-item">
                <a href="#"><i class="fa-solid fa-house"></i></a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                尚未完成的訂單
              </li>
            </ol>
          </nav>
          <div class="wrap" style="width: 300px">
            <span class="material-icons"> search </span>
            <input
              class="form-control form-control-sm m-0"
              type="search"
              style="width: 300px"
              placeholder="訂單之收件人姓名、電話、地址"
              v-model.trim="keyword"
            />
          </div>
        </div>
        <!-- 尚未完成的訂單列表 -->
        <Transition v-if="isReady" name="fade">
          <div class="row" v-show="filterKeyword.length">
            <div
              class="col-md-6 col-lg-4 pb-3"
              v-for="item in filterKeyword"
              :key="item.id"
            >
              <router-link :to="`/order/${item.id}`">
                <PaymentInfo :id="item.id" :order="item" />
              </router-link>
            </div>
          </div>
        </Transition>
        <!-- no data -->
        <Transition v-if="isReady" name="fade">
          <NoData v-show="!filterKeyword.length" :keyword="keyword" />
        </Transition>
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
import PaymentInfo from "@/components/widget/PaymentInfo.vue";
import Footer from "@/components/front/Footer.vue";
import GoTop from "@/components/widget/GoTop.vue";
import NoData from "@/components/widget/NoData";

import { getOrders } from "@/api/order";
export default {
  components: {
    Navbar,
    PaymentInfo,
    Footer,
    GoTop,
    NoData,
  },
  data() {
    return {
      isLoading: false,
      orders: [],
      // 搜尋的關鍵字
      keyword: "",
      // 資料是否請求完畢
      isReady: false,
    };
  },
  computed: {
    // 篩選訂單
    filterKeyword() {
      if (this.keyword) {
        // 若有做篩選
        const data = this.orders.filter((item) => {
          let name = item.user.name.toLowerCase();
          let tel = item.user.tel.toLowerCase();
          let address = item.user.address.toLowerCase();
          let keyword = this.keyword.toLowerCase();
          return (
            name.match(keyword) || tel.match(keyword) || address.match(keyword)
          );
        });
        return data;
      } else {
        // 若沒做篩選
        const data = this.orders;
        return data;
      }
    },
  },
  mounted() {
    this.requestGetOrders();
  },
  methods: {
    // 取得訂單列表
    async requestGetOrders() {
      let page = 1;
      try {
        this.isLoading = true;
        let res = await getOrders(page);
        if (res.data.success) {
          // 篩選出結帳的訂單
          this.orders = res.data.orders.filter((item) => {
            return !item.is_paid;
          });
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
  watch: {
    // 讓資料請求完成再渲染
    orders() {
      this.isReady = true;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: #000;
}
</style>
