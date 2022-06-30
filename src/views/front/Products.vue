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
    data-aos-delay="300"
  >
    <!-- main -->
    <main style="padding-top: 73px; min-height: calc(100vh - 104px)">
      <div class="container pt-4 pb-5">
        <div class="search-bar">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb small">
              <li class="breadcrumb-item">
                <a href="#"><i class="fa-solid fa-house"></i></a>
              </li>
              <li
                class="breadcrumb-item"
                :class="{ active: !keyword }"
                aria-current="page"
              >
                <router-link
                  to="/products"
                  @click.prevent="goToType('')"
                  v-if="keyword"
                >
                  全部商品
                </router-link>
                <span v-else>全部商品</span>
              </li>
              <li
                class="breadcrumb-item active"
                aria-current="page"
                v-show="keyword"
              >
                {{ typeToTw }}
              </li>
            </ol>
          </nav>
          <div class="d-flex">
            <!-- 搜尋 -->
            <div class="wrap">
              <span class="material-icons"> search </span>
              <input
                class="form-control form-control-sm"
                type="search"
                placeholder="商品名稱"
                v-model.trim="keyword"
                list="datalistOptions"
              />
              <datalist id="datalistOptions">
                <option value="Round">Round</option>
                <option value="Square">Square</option>
                <option value="Boston">Boston</option>
                <option value="Wellington">Wellington</option>
              </datalist>
            </div>
            <!-- 排序 -->
            <p class="small">
              <span class="material-icons"> sort </span>
              <select v-model="sortType">
                <option
                  v-for="(item, index) in sortItem"
                  :key="index"
                  :value="index"
                >
                  {{ item }}
                </option>
              </select>
            </p>
          </div>
        </div>
        <!-- 商品列表 -->
        <Transition v-if="isReady" name="fade">
          <div class="row g-2 g-md-4" v-show="filterKeyword.length">
            <div
              class="col-6 col-lg-4 col-xl-3 pb-3"
              v-for="(item, index) in filterKeyword"
              :key="index"
            >
              <ProductCard
                :product="item"
                @addToCart="showMsg"
                :rootClass="'mx-0'"
              />
            </div>
          </div>
        </Transition>
        <!-- no data -->
        <Transition v-if="isReady" name="fade">
          <NoData v-show="!filterKeyword.length" :keyword="keyword" />
        </Transition>
        <!-- 頁碼 -->
        <Pagination
          :pagination="pagination"
          @getList="getProducts"
          v-show="pagination.current_page && filterKeyword.length && !keyword"
        />
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
import ProductCard from "@/components/widget/ProductCard.vue";
import Pagination from "@/components/widget/Pagination";
import Footer from "@/components/front/Footer.vue";
import GoTop from "@/components/widget/GoTop.vue";
import NoData from "@/components/widget/NoData";

export default {
  components: {
    Navbar,
    ProductCard,
    Pagination,
    Footer,
    GoTop,
    NoData,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      allProducts: [],
      pagination: {},
      // 搜尋的關鍵字
      keyword: "",
      // 排序的選項
      sortItem: {
        0: "原順序",
        1: "售價的高到低",
        2: "售價的低到高",
      },
      // 選中的排序
      sortType: "0",
      // 資料是否請求完畢
      isReady: false,
    };
  },
  computed: {
    // 篩選商品名稱
    filterKeyword() {
      if (this.keyword) {
        // 若有做篩選
        const data = this.allProducts.filter((item) => {
          let content = item.title.toLowerCase();
          let keyword = this.keyword.toLowerCase();
          if (keyword == "hot") {
            return item.unit == true;
          } else if (keyword == "sale") {
            return item.price != item.origin_price;
          } else {
            return content.match(keyword);
          }
        });
        // 判斷是否有排序
        if (this.sortType) {
          data.sort((t1, t2) => {
            // 且有排序
            return this.sortType == 1
              ? t2.price - t1.price
              : t1.price - t2.price;
          });
        }
        // 且沒排序
        return data;
      } else {
        // 若沒做篩選
        const data = this.products;
        // 判斷是否有排序
        if (this.sortType) {
          data.sort((t1, t2) => {
            // 且有排序
            return this.sortType == 1
              ? t2.price - t1.price
              : t1.price - t2.price;
          });
        }
        // 且沒排序
        return data;
      }
    },
    productType() {
      return this.$store.state.productType;
    },
    typeToTw() {
      let content = "";
      switch (this.keyword) {
        case "Hot":
          content = "熱門推薦";
          break;
        case "Sale":
          content = "優惠活動";
          break;
        case "Round":
          content = "圓框款";
          break;
        case "Square":
          content = "方型款";
          break;
        case "Boston":
          content = "波士頓";
          break;
        case "Wellington":
          content = "威靈頓";
          break;
        default:
          content = this.keyword;
          break;
      }
      return content;
    },
  },
  mounted() {
    this.getProducts();
    this.getAllProducts();
  },
  methods: {
    // 取得商品列表
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/products?page=${page}`;
      this.axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products.filter((item) => {
              return item.is_enabled == true;
            });
            this.pagination = res.data.pagination;
            this.keyword = this.productType;
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
    // 取得全部商品列表
    getAllProducts() {
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/products/all`;
      this.axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.allProducts = res.data.products;
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
    // 關閉提示
    clear() {
      this.$toast.removeAllGroups();
    },
    // 加入購物車訊息提示
    showMsg(msg) {
      this.isLoading = true;
      setTimeout(() => {
        if (msg) {
          this.showSuccessMsg(msg);
          this.isLoading = false;
        }
      }, 500);
    },
    // 前往某框型的商品頁
    goToType(productType) {
      this.$store.commit("setProductType", productType);
    },
  },
  watch: {
    // 讓資料請求完成再渲染
    products() {
      this.isReady = true;
    },
    keyword() {
      this.isReady = true;
    },
    productType() {
      this.getProducts();
    },
  },
};
</script>

<style lang="scss" scoped></style>
