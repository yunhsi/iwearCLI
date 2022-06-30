<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- toast -->
  <Toast :breakpoints="{ '414px': { width: '100%', right: '0', left: '0' } }" />
  <nav
    class="navbar navbar-expand-md navbar-dark fixed-top px-md-3"
    :class="rootClass"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="400"
  >
    <div class="container ps-2">
      <div class="d-flex align-items-center">
        <!-- mobile menu button -->
        <button
          class="navbar-toggler border-0 ps-2"
          style="font-size: 16px"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars" style="font-size: 20px"></i>
        </button>

        <!-- logo -->
        <router-link to="/" class="navbar-brand">
          <i class="fa-solid fa-glasses pe-2"></i>!wear
        </router-link>
      </div>

      <ul class="order-md-5 navbar-nav flex-row">
        <!-- 購物車  -->
        <li class="nav-item dropdown m-0">
          <div
            class="nav-link dropdown-toggle position-relative p-0 px-3 d-flex"
            :class="{ active: cartActive }"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <!-- 購物車 icon -->
            <span class="material-icons"> local_mall </span>
            <!-- 購物車數量 -->
            <Transition name="fade">
              <span class="num bg-danger" v-show="num">{{ num }}</span>
            </Transition>
          </div>
          <!-- 購物車清單 -->
          <div
            class="dropdown-menu dropdown-menu-end border-danger p-3 shadow"
            aria-labelledby="navbarDropdown"
            style="width: 320px"
          >
            <div v-if="num">
              <div class="overflow-scroll" style="max-height: 300px">
                <table class="table table-sm small m-0">
                  <tbody>
                    <!-- 標題 -->
                    <tr class="fw-bolder">
                      <td colspan="2">品名</td>
                      <td colspan="2"></td>
                      <td class="w-100 text-center">數量</td>
                      <td class="text-center">小計</td>
                      <td></td>
                    </tr>
                    <!-- 列表 -->
                    <tr
                      v-for="item in cart.carts"
                      :key="item.id"
                      class="list-hover"
                    >
                      <td colspan="2" class="align-middle">
                        <router-link :to="`/product/${item.product_id}`">
                          <img
                            :src="item.product.image"
                            alt=""
                            class="rounded"
                          />
                        </router-link>
                      </td>
                      <td
                        colspan="2"
                        class="align-middle"
                        style="text-transform: capitalize"
                      >
                        <router-link
                          :to="`/product/${item.product_id}`"
                          class="text-dark d-block"
                        >
                          {{ item.product.title }}
                        </router-link>
                      </td>
                      <td class="align-middle text-center">
                        {{ item.qty }}
                      </td>
                      <td class="align-middle">
                        ${{ $filters.currency(item.total) }}
                      </td>
                      <td class="text-center align-middle">
                        <a
                          href="javascript:;"
                          class="close"
                          @click="requestDeleteCart(item.id)"
                        >
                          <i class="fas fa-times"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-grid gap-2">
                <!-- 總計 -->
                <p class="m-0 pt-3 pb-1 small text-end fw-bolder">
                  總計：${{ $filters.currency(cart.total) }}
                </p>
                <!-- 結帳 -->
                <router-link
                  to="/cart"
                  class="btn btn-sm btn-block btn-danger text-white"
                  >前往結帳</router-link
                >
              </div>
            </div>
            <!-- no data -->
            <div v-else>
              <p class="text-center small py-3" style="letter-spacing: 2px">
                您的購物車是空的唷！
              </p>
              <div class="d-grid gap-2">
                <!-- 結帳 -->
                <router-link
                  to="/products"
                  class="btn btn-sm btn-block btn-danger text-white"
                  >購物去</router-link
                >
              </div>
            </div>
          </div>
        </li>
        <!-- 訂單 -->
        <li class="nav-item dropdown m-0">
          <div
            class="nav-link dropdown-toggle position-relative p-0 px-3 d-flex"
            :class="{ active: orderActive }"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <!-- 訂單 icon -->
            <span class="material-icons"> content_paste_search </span>
            <!-- 訂單數量 -->
            <Transition name="fade">
              <span class="num bg-danger" v-show="unpaid.length">!</span>
            </Transition>
          </div>
          <!-- 訂單清單 -->
          <div
            class="dropdown-menu dropdown-menu-end border-danger p-0 shadow"
            aria-labelledby="navbarDropdown"
            style="width: 200px"
          >
            <div class="list-group small">
              <router-link
                to="/unpaid"
                class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
              >
                尚未完成的訂單
                <span
                  class="rounded-circle bg-danger text-white justify-content-center align-items-center"
                  style="width: 17px; height: 17px; display: flex"
                  v-show="unpaid.length"
                  >!</span
                >
              </router-link>
              <router-link
                to="/paid"
                class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
              >
                已完成的訂單
              </router-link>
            </div>
          </div>
        </li>
      </ul>

      <!-- menu -->
      <div
        class="collapse navbar-collapse px-2"
        id="navbarNavDropdown"
        ref="menu"
      >
        <ul class="navbar-nav position-relative small" style="top: 10px">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item products-dropdown">
            <div class="nav-link" :class="{ active: productsActive }">
              商品分類
            </div>
            <div class="py-2">
              <ul
                class="list-unstyled ms-2 py-1 border border-danger rounded shadow-sm"
              >
                <li>
                  <router-link to="/products" @click.prevent="goToType('Hot')"
                    >熱門推薦</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" @click.prevent="goToType('Sale')"
                    >優惠活動</router-link
                  >
                </li>
                <hr class="my-1" />
                <li>
                  <router-link to="/products" @click.prevent="goToType('')"
                    >全部商品</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/products"
                    @click.prevent="goToType('Round')"
                    class="d-flex justify-content-between"
                  >
                    <div>圓框款</div>
                    <img
                      src="https://jp.owndays.com/images/frame-types/round.svg"
                    />
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/products"
                    @click.prevent="goToType('Square')"
                    class="d-flex justify-content-between"
                  >
                    <div>方型款</div>
                    <img
                      src="https://jp.owndays.com/images/frame-types/square.svg"
                    />
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/products"
                    @click.prevent="goToType('Boston')"
                    class="d-flex justify-content-between"
                  >
                    <div>波士頓</div>
                    <img
                      src="https://jp.owndays.com/images/frame-types/boston.svg"
                  /></router-link>
                </li>
                <li>
                  <router-link
                    to="/products"
                    @click.prevent="goToType('Wellington')"
                    class="d-flex justify-content-between"
                  >
                    <div>威靈頓</div>
                    <img
                      src="https://jp.owndays.com/images/frame-types/wellington.svg"
                  /></router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/notes" class="nav-link">購物說明</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { getCarts, deleteCart } from "@/api/cart";
import { getOrders } from "@/api/order";
export default {
  props: ["rootClass"],
  data() {
    return {
      isLoading: false,
      navTag: "",
      cart: {},
      num: 0,
      cartActive: false,
      orderActive: false,
      productsActive: false,
      unpaid: [],
    };
  },
  computed: {
    isAddToCart() {
      return this.$store.state.isAddToCart;
    },
  },
  mounted() {
    this.navTag = document.querySelector(".navbar");
    window.addEventListener("scroll", this.handleScroll);
    this.requestCarts();
    this.linkActive();
    this.requestGetOrders();
  },
  unmounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 80) {
        this.navTag.classList.add("scrolled");
      } else {
        this.navTag.classList.remove("scrolled");
      }
    },
    // 若在結帳頁或訂單列表頁，則加上 active
    linkActive() {
      if (
        this.$route.name === "Step1" ||
        this.$route.name === "Step2" ||
        this.$route.name === "Step3"
      ) {
        this.cartActive = true;
      } else if (this.$route.name === "Unpaid" || this.$route.name === "Paid") {
        this.orderActive = true;
      } else if (this.$route.name === "Products") {
        this.productsActive = true;
      }
    },
    // 取得購物車列表
    async requestCarts() {
      try {
        let res = await getCarts();
        if (res.data.success) {
          this.cart = res.data.data;
          // 取得購物車數量
          let cartNum = 0;
          this.cart.carts.forEach((item) => {
            cartNum += item.qty;
          });
          this.num = cartNum;
          //
        }
      } catch (err) {
        this.$swal({
          icon: "error",
          title: `${err}`,
        });
      }
    },
    // 刪除某一購物車資料
    async requestDeleteCart(id) {
      try {
        this.isLoading = true;
        let res = await deleteCart(id);
        if (res.data.success) {
          this.requestCarts();
          this.showSuccessMsg(res.data.message);
        }
        this.isLoading = false;
      } catch (err) {
        this.$swal({
          icon: "error",
          title: `${err}`,
        });
      }
    },
    // 取得訂單列表
    async requestGetOrders() {
      let page = 1;
      try {
        this.isLoading = true;
        let res = await getOrders(page);
        if (res.data.success) {
          // 篩選出未結帳的訂單
          this.unpaid = res.data.orders.filter((item) => {
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
    // 前往某框型的商品頁
    goToType(productType) {
      this.$store.commit("setProductType", productType);
      this.$refs.menu.classList.remove("show");
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
    // 當加入購物車時，重新取得購物車資料
    isAddToCart() {
      this.requestCarts();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_grid";
.navbar {
  background-color: transparent;
  padding: 12px 0;
  @include phone {
    padding: 10px 0;
  }
  .nav-item {
    margin-right: 20px;
    @include phone {
      margin-right: 0;
    }
  }
  .navbar-brand {
    font-size: 24px;
    @media screen and (max-width: 767px) {
      margin-left: 10px;
    }
  }
  .router-link-active {
    color: #fff;
  }
  .active {
    color: #000 !important;
  }
  .dropdown {
    .show {
      .material-icons {
        color: #000;
      }
    }
    .close {
      transition: all 0.3s;
      color: gray;
      &:hover {
        color: #000;
      }
    }
    .active {
      color: #000;
    }
    .dropdown-toggle::after {
      display: none;
    }
    .dropdown-menu {
      position: absolute;
      top: 40px;
      img {
        max-width: 60px;
        object-fit: cover;
        object-position: center;
      }
    }
  }
  .products-dropdown {
    .nav-link {
      cursor: pointer;
    }
    &:hover {
      ul {
        opacity: 1;
        pointer-events: visible;
      }
    }
    ul {
      font-size: 14px;
      opacity: 0;
      transition: all 0.3s;
      pointer-events: none;
      position: absolute;
      background: #fff;
      width: 150px;
      @media screen and (max-width: 767px) {
        position: static;
        margin: 0 !important;
        width: 100% !important;
        opacity: 1;
      }
      li {
        transition: all 0.3s;
        letter-spacing: 1px;
        &:hover {
          background: #f5f5f5;
        }
        a {
          padding: 7px 14px;
          color: #000;
          display: block;
          img {
            width: 50px;
          }
        }
      }
    }
  }
  .num {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    top: -6px;
    right: 5px;
    color: rgba(255, 255, 255, 0.85);
  }
}
.scrolled {
  background-color: rgba(255, 255, 255, 0.7) !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(7px);
  .nav-link {
    color: #7f7f7f;
    &:hover {
      color: #000 !important;
    }
    &:focus {
      color: #000 !important;
    }
  }
  .navbar-brand,
  .fa-bars,
  .fa-heart,
  .router-link-active {
    color: #000;
  }
}
.page-navbar {
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid #dee2e6;
  .nav-link {
    color: #7f7f7f;
    &:hover {
      color: #000 !important;
    }
    &:focus {
      color: #000 !important;
    }
  }
  .navbar-brand,
  .fa-bars,
  .fa-heart,
  .router-link-active {
    color: #000;
  }
}
</style>
