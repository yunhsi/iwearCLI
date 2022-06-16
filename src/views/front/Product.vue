<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- toast -->
  <Toast :breakpoints="{ '414px': { width: '100%', right: '0', left: '0' } }" />
  <!-- navbar -->
  <Navbar rootClass="page-navbar" />
  <div>
    <!-- main -->
    <main style="padding-top: 73px; min-height: calc(100vh - 104px)">
      <div class="container py-5">
        <nav aria-label="breadcrumb" class="breadcrumb-wrap">
          <ol class="breadcrumb small">
            <li class="breadcrumb-item">
              <a href="#"><i class="fa-solid fa-house"></i></a>
            </li>
            <li class="breadcrumb-item" aria-current="page">
              <router-link to="/products" @click.prevent="goToType('')">
                全部商品
              </router-link>
            </li>
            <li
              class="breadcrumb-item active"
              aria-current="page"
              style="text-transform: capitalize"
            >
              {{ product.title }}
            </li>
          </ol>
        </nav>
        <!-- 單一商品細節 -->
        <div
          class="row pb-5 pt-3"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
          data-aos-delay="300"
        >
          <!-- 商品圖 -->
          <div class="col-md-6 px-lg-5 d-flex align-items-end">
            <div class="position-relative w-100">
              <img :src="product.image" alt="" class="rounded shadow-sm" />
              <div class="label d-flex">
                <span
                  class="badge rounded-pill bg-danger shadow"
                  v-show="product.unit"
                  >Hot</span
                >
                <span
                  class="badge rounded-pill bg-warning shadow"
                  v-show="product.price != product.origin_price"
                  >Sale
                  {{
                    parseInt(
                      (parseInt(product.price) /
                        parseInt(product.origin_price)) *
                        100
                    ) - 100
                  }}%</span
                >
              </div>
            </div>
          </div>
          <!-- 商品資訊 -->
          <div class="col-md-6 pe-lg-5 d-flex align-items-end info">
            <div class="w-100">
              <small class="text-muted fw-light">{{ product.id }}</small>
              <h4 class="fw-light py-1">
                {{ product.title }}
              </h4>
              <h5 class="border-bottom border-danger pb-3 fw-bolder">
                NTD {{ $filters.currency(product.price) }}
              </h5>
              <div class="p-2 my-3">
                <p class="mb-2">商品規格</p>
                <ul class="list-unstyled small m-0">
                  <li>- 類型： {{ product.category }}</li>
                  <li>- 框型： {{ product.description }}</li>
                  <li>- 材質： {{ product.content }}</li>
                  <li>- 尺寸： 53 □ 20 - 146 ○ 48</li>
                </ul>
              </div>
              <div class="row">
                <!-- counter -->
                <div class="col-lg-6">
                  <Counter
                    :count="count"
                    @reduceCount="reduceCount"
                    @addCount="addCount"
                  />
                </div>
                <!-- 加入購物車 -->
                <div class="col-lg-6 pt-3 pt-lg-0">
                  <div class="d-grid gap-2">
                    <button
                      class="btn btn-danger"
                      type="button"
                      @click="addToCart(product.id, count)"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <!-- 同類型輪播 -->
        <div class="container my-5">
          <h3 class="px-3 pt-4 fw-normal">相關商品</h3>
          <ProductCarousel :products="recommendation" :isloop="false" />
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
import Counter from "@/components/widget/Counter.vue";
import ProductCarousel from "@/components/widget/ProductCarousel.vue";
import Footer from "@/components/front/Footer.vue";
import GoTop from "@/components/widget/GoTop.vue";
export default {
  components: {
    Navbar,
    Counter,
    ProductCarousel,
    Footer,
    GoTop,
  },
  data() {
    return {
      isLoading: false,
      product: [],
      products: [],
      count: 1,
    };
  },
  computed: {
    // 商品 id
    id() {
      return this.$route.params.productId;
    },
    // 取得相同類型、框型的商品
    recommendation() {
      const data = this.products.filter((item) => {
        return (
          item.category == this.product.category &&
          item.description == this.product.description &&
          item.id !== this.product.id
        );
      });
      return data;
    },
  },
  mounted() {
    this.getProduct();
    this.getProducts();
  },
  methods: {
    // 取得單一商品細節
    getProduct() {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/product/${this.id}`;
      this.axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: `${err}`,
          });
        });
    },
    // 取得全部商品
    getProducts() {
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/products/all`;
      this.axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          }
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: `${err}`,
          });
        });
    },
    // 減少商品數量
    reduceCount(count) {
      this.count = count;
      this.count = this.count - 1;
    },
    // 增加商品數量
    addCount(count) {
      this.count = count;
      this.count = this.count + 1;
    },
    // 加入購物車
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.axios
        .post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.showSuccessMsg(res.data.message);
            // 重新觸發 navbar 的購物車列表
            this.$store.commit("addToCart");
          }
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: `${err}`,
          });
        });
    },
    // 前往某框型的商品頁
    goToType(productType) {
      this.$store.commit("setProductType", productType);
    },
    // 成功訊息提示
    showSuccessMsg(msg) {
      this.$toast.add({
        severity: "success",
        summary: "訊息提示",
        detail: `${msg}`,
        life: 1000,
      });
    },
    // 失敗訊息提示
    showErrorMsg(msg) {
      this.$toast.add({
        severity: "error",
        summary: "訊息提示",
        detail: `${msg}`,
        life: 1000,
      });
    },
    // 關閉提示
    clear() {
      this.$toast.removeAllGroups();
    },
  },
  watch: {
    // 若路由改變，則重新取得商品資料
    $route() {
      if (this.$route.name === "Product") {
        this.getProduct();
        this.getProducts();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_grid";
.breadcrumb-wrap {
  padding: 10px 35px;
  @include pad {
    padding: 0px;
  }
}
img {
  width: 100%;
  object-fit: cover;
  border: 1px solid #fff;
}
.label {
  position: absolute;
  top: 18px;
  right: 18px;
  span {
    margin-left: 5px;
    letter-spacing: 1px;
  }
}
.info {
  @media screen and (max-width: 767px) {
    padding-top: 30px;
  }
  small {
    font-size: 12px;
  }
  h4 {
    text-transform: capitalize;
  }
  ul {
    li {
      line-height: 24px;
    }
  }
}
</style>
