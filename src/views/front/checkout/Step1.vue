<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- toast -->
  <Toast :breakpoints="{ '414px': { width: '100%', right: '0', left: '0' } }" />
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
        <CheckoutSteps step1Class="active" />
        <!-- 1. 確認品項 -->
        <div class="row pt-2">
          <div class="col-12">
            <Transition v-if="isReady" name="fade">
              <table class="table small" v-if="num">
                <tbody>
                  <!-- 標題 -->
                  <tr class="border-bottom fw-bold">
                    <td scope="col" class="border-0">品名</td>
                    <td scope="col" class="border-0 mobile-hide"></td>
                    <td scope="col" class="border-0 text-center mobile-width">
                      數量
                    </td>
                    <td scope="col" class="border-0 text-center">單價</td>
                    <td scope="col" class="border-0 text-center">小計</td>
                    <td scope="col" class="border-0"></td>
                  </tr>
                  <!-- 列表 -->
                  <tr
                    class="border-bottom list-hover"
                    v-for="item in cart.carts"
                    :key="item.id"
                  >
                    <td scope="row" class="border-0 fw-normal py-3 mobile-hide">
                      <router-link :to="`/product/${item.product_id}`">
                        <img :src="item.product.image" alt="" class="rounded" />
                      </router-link>
                    </td>
                    <td class="border-0 align-middle">
                      <router-link
                        :to="`/product/${item.product_id}`"
                        style="text-transform: capitalize"
                        >{{ item.product.title }}</router-link
                      >
                    </td>
                    <td class="border-0 align-middle text-center">
                      {{ item.qty }}
                    </td>
                    <td class="border-0 align-middle">
                      <p class="mb-0 text-end">
                        ${{ $filters.currency(item.product.price) }}
                      </p>
                    </td>
                    <td class="border-0 align-middle">
                      <p class="mb-0 text-end">
                        ${{ $filters.currency(item.final_total) }}
                      </p>
                    </td>
                    <td class="border-0 align-middle text-center">
                      <a
                        href="javascript:;"
                        @click="deleteCart(item.id)"
                        class="close"
                        ><i class="fas fa-times"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Transition>
            <!-- no data -->
            <Transition v-if="isReady" name="fade">
              <div class="py-5" v-show="!num">
                <p class="text-center" style="letter-spacing: 2px">
                  購物車內沒有商品
                </p>
              </div>
            </Transition>
            <div class="row py-3">
              <!-- 輸入優惠碼 -->
              <div class="col-md-6">
                <p class="h6 text-secondary mb-2 small">
                  ➤ 開店慶輸入優惠碼 happy99 即可享九折優惠
                </p>
                <div class="input-group input-group">
                  <input
                    type="text"
                    class="form-control text-danger fw-bold"
                    placeholder="請輸入優惠碼"
                    v-model="coupon_code"
                  /><button
                    class="btn btn-secondary text-white"
                    type="button"
                    @click="getCoupon"
                  >
                    套用優惠碼
                  </button>
                </div>
              </div>
              <!-- 總計 -->
              <div class="col-md-6 text-end h5 m-0 mt-4 mt-md-0">
                <p>總金額：${{ $filters.currency(cart.final_total) }} 元</p>
              </div>
            </div>
            <hr />
            <!-- 按鈕 -->
            <div class="text-end">
              <router-link
                to="/products"
                class="btn btn-outline-secondary me-3 px-4"
                >繼續購物</router-link
              ><button
                type="button"
                class="btn btn-danger px-4"
                @click="toNextStep"
              >
                前往結帳
              </button>
            </div>
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
import Footer from "@/components/front/Footer.vue";
import GoTop from "@/components/widget/GoTop.vue";
export default {
  components: {
    Navbar,
    CheckoutSteps,
    Footer,
    GoTop,
  },
  data() {
    return {
      isLoading: false,
      cart: [],
      coupon_code: "",
      // 購物車數量
      num: 0,
      // 是否已套用優惠券
      isGetCoupon: localStorage.getItem("isGetCoupon"),
      // 資料是否請求完畢
      isReady: false,
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    // 取得購物車列表
    getCart() {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/cart`;
      this.axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
            // 取得購物車數量
            let cartNum = 0;
            this.cart.carts.forEach((item) => {
              cartNum += item.qty;
            });
            this.num = cartNum;
            // 若已套用優惠券，則顯示 coupon_code
            if (this.isGetCoupon == "true") {
              this.coupon_code = "happy99";
            }
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
    // 刪除某一購物車資料
    deleteCart(id) {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/cart/${id}`;
      this.axios
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getCart();
            this.showSuccessMsg(res.data.message);
            // 重新觸發 navbar 的購物車列表
            this.$store.commit("addToCart");
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
    // 取得優惠券
    getCoupon() {
      this.isLoading = true;
      const coupon = {
        code: this.coupon_code,
      };
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/coupon`;
      this.axios
        .post(api, { data: { coupon } })
        .then((res) => {
          if (res.data.success && this.coupon_code == "happy99") {
            localStorage.setItem("isGetCoupon", true);
            this.getCart();
            this.showSuccessMsg("已套用優惠券");
            this.isLoading = false;
          } else {
            this.showErrorMsg("找不到優惠券");
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
    // 前往結帳
    toNextStep() {
      if (this.num) {
        this.$router.push("/order");
      } else {
        this.$swal({
          icon: "warning",
          title: "購物車內沒有商品",
          confirmButtonColor: "#636C74",
        });
      }
    },
  },
  watch: {
    // 讓資料請求完成再渲染
    cart() {
      this.isReady = true;
    },
    // 若購物車清空，則移除 coupon_code
    num() {
      if (!this.num) {
        localStorage.setItem("isGetCoupon", false);
        this.coupon_code = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_grid";
table {
  a {
    color: #000;
  }
  img {
    max-width: 90px;
    object-fit: cover;
    object-position: center;
  }
  .mobile-hide {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  .mobile-width {
    @include phone {
      width: 100%;
    }
  }
}
</style>
