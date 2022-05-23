<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- toast -->
  <Toast :breakpoints="{ '414px': { width: '100%', right: '0', left: '0' } }" />
  <!-- navbar -->
  <Navbar :filterItem="filterItem" @changeKeyword="changeKeyword" />
  <div class="d-flex justify-content-between">
    <!-- title -->
    <h1 class="h3 m-0 d-flex align-items-center">商品管理</h1>
    <!-- 新增商品 -->
    <button
      type="button"
      class="btn btn-sm btn-primary d-block ms-auto d-flex align-items-center"
      @click="openModal(true)"
    >
      <span class="material-icons pe-2">add_circle</span>新增商品
    </button>
  </div>
  <!-- 排序 -->
  <p class="text-end pt-3 small">
    按照
    <select v-model="sortType">
      <option v-for="(item, index) in sortItem" :key="index" :value="index">
        {{ item }}
      </option>
    </select>
    排序
  </p>
  <!-- 商品列表 -->
  <Transition v-if="isReady" name="fade">
    <table class="table table-hover align-middle" v-show="filterKeyword.length">
      <!-- 標題 -->
      <thead>
        <tr>
          <th scope="col">品名</th>
          <th scope="col"></th>
          <th class="text-center" scope="col">售價</th>
          <th class="text-center" scope="col">啟用</th>
          <th class="text-center" scope="col">推薦</th>
          <th class="text-center" scope="col"></th>
        </tr>
      </thead>
      <!-- 列表 -->
      <tbody class="small">
        <tr v-for="item in filterKeyword" :key="item.id">
          <th scope="row">
            <img
              :src="item.image"
              class="rounded"
              style="width: 100px; height: 60px; object-fit: cover"
              alt=""
            />
          </th>
          <td>{{ item.title }}</td>
          <td class="text-center">${{ $filters.currency(item.price) }}</td>
          <td class="text-center">
            <span v-if="item.is_enabled" class="text-success material-icons"
              >check_circle</span
            >
            <span v-else></span>
          </td>
          <td class="text-center">
            <span v-if="item.origin_price" class="text-warning material-icons"
              >check_circle</span
            >
            <span v-else></span>
          </td>
          <!-- 編輯 -->
          <td class="text-center">
            <div class="d-grid gap-2 d-md-block">
              <button
                class="btn btn-sm btn-outline-primary"
                type="button"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-sm btn-outline-danger"
                type="button"
                @click="deleteConfirm(item.id)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
  <!-- productModal -->
  <ProductModal
    :product="tempProduct"
    :isNew="isNew"
    @updateProduct="updateProduct"
    ref="productModal"
  />
</template>

<script>
import Navbar from "@/components/admin/Navbar";
import Pagination from "@/components/widget/Pagination";
import ProductModal from "@/components/admin/ProductModal";
import NoData from "@/components/widget/NoData";
export default {
  components: {
    Navbar,
    Pagination,
    ProductModal,
    NoData,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      allProducts: [],
      pagination: {},
      isNew: false,
      bodyTag: document.querySelector("body"),
      tempProduct: {},
      // 資料是否請求完畢
      isReady: false,
      // 篩選的項目
      filterItem: {
        placeholder: "搜尋商品名稱",
      },
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
    };
  },
  computed: {
    // 篩選產品名稱
    filterKeyword() {
      if (this.keyword) {
        // 若有做篩選
        const data = this.products.filter((item) => {
          let content = item.title.toLowerCase();
          let keyword = this.keyword.toLowerCase();
          return content.match(keyword);
        });
        // 判斷是否有排序
        if (this.sortType) {
          data.sort((t1, t2) => {
            // 若有排序
            return this.sortType == 1
              ? t2.price - t1.price
              : t1.price - t2.price;
          });
        }
        // 若沒排序
        return data;
      } else {
        // 若沒做篩選
        const data = this.products;
        // 判斷是否有排序
        if (this.sortType) {
          data.sort((t1, t2) => {
            // 若有排序
            return this.sortType == 1
              ? t2.price - t1.price
              : t1.price - t2.price;
          });
        }
        // 若沒排序
        return data;
      }
    },
  },
  mounted() {
    this.getProducts();
    this.getAllProducts();
  },
  methods: {
    // 點開商品 modal
    openModal(isNew, item) {
      this.$refs.productModal.showModal();
      if (isNew) {
        // 新增的
        this.tempProduct = {
          // 設定選項的初始值
          category: "",
          description: "",
          content: "",
        };
        this.isNew = true;
      } else {
        // 編輯的
        this.tempProduct = Object.assign({}, item); // 避免物件參考
        this.isNew = false;
      }
    },
    // 取得商品列表
    getProducts(page = 1) {
      this.bodyTag.classList.add("overflow-auto");
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/admin/products?page=${page}`;
      this.axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.products = res.data.products;
            this.pagination = res.data.pagination;
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
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/admin/products/all`;
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
    // 新增 or 編輯商品
    updateProduct() {
      this.isLoading = true;
      let api = "";
      let httpMethod = "";
      if (this.isNew) {
        // 新增商品
        api = "https://vue-course-api.hexschool.io/api/yunhsi/admin/product";
        httpMethod = "post";
      } else {
        // 編輯商品
        api = `https://vue-course-api.hexschool.io/api/yunhsi/admin/product/${this.tempProduct.id}`;
        httpMethod = "put";
      }
      // 傳入 tempProduct 物件，請求 api
      this.axios[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            this.getProducts();
            setTimeout(() => {
              this.showSuccessMsg(res.data.message);
            }, 500);
            this.$refs.productModal.hideModal();
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
    // 刪除確認對話框
    deleteConfirm(id) {
      this.$swal({
        title: "你確定嗎?",
        text: "您將無法還原此內容！",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0D6EFB",
        cancelButtonColor: "#dc3534",
        confirmButtonText: "是的，我要刪除！",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProduct(id);
        }
      });
    },
    // 刪除商品
    deleteProduct(id) {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/admin/product/${id}`;
      this.axios
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getProducts();
            this.showSuccessMsg(res.data.message);
          }
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: `${err}`,
          });
        });
    },
    changeKeyword(keyword) {
      this.keyword = keyword;
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
  },
};
</script>

<style lang="scss" scoped></style>
