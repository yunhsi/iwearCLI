<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- toast -->
  <Toast :breakpoints="{ '414px': { width: '100%', right: '0', left: '0' } }" />
  <!-- navbar -->
  <Navbar :filterItem="filterItem" @changeKeyword="changeKeyword" />
  <!-- title -->
  <h1 class="h3 m-0 d-flex align-items-center">訂單管理</h1>
  <!-- 訂單列表 -->
  <Transition v-if="isReady" name="fade">
    <div class="pt-3" v-show="filterKeyword.length">
      <table class="table table-hover align-middle">
        <!-- 標題 -->
        <thead>
          <tr>
            <th>編號</th>
            <th>訂購資訊</th>
            <th>訂購款項</th>
            <th class="text-center">應付金額</th>
            <th class="text-center">付款</th>
          </tr>
        </thead>
        <!-- 列表 -->
        <tbody class="small">
          <tr v-for="item in filterKeyword" :key="item.id">
            <td class="small fw-bold">
              <ul class="list-unstyled">
                <li>{{ item.id }}</li>
                <li class="small text-muted">
                  建立時間：{{ $filters.date(item.create_at) }}
                </li>
              </ul>
            </td>
            <td>
              <ul class="list-unstyled">
                <li>{{ item.user.name }}</li>
                <li>{{ item.user.tel }}</li>
                <li>{{ item.user.address }}</li>
                <li>{{ item.user.email }}</li>
                <li>{{ item.user.payment }}</li>
              </ul>
            </td>
            <td>
              <ul
                class="list-unstyled"
                v-for="product in item.products"
                :key="product"
              >
                <li>{{ product.product.title }}</li>
                <li class="small">數量：{{ product.qty }}</li>
              </ul>
            </td>
            <td class="text-end">${{ $filters.currency(item.total) }}</td>
            <td class="text-center">
              <span v-if="item.is_paid" class="text-success material-icons"
                >check_circle</span
              >
              <span v-else></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Transition>
  <!-- no data -->
  <Transition v-if="isReady" name="fade">
    <NoData v-show="!filterKeyword.length" :keyword="keyword" />
  </Transition>
  <!-- 頁碼 -->
  <Pagination
    :pagination="pagination"
    @getList="getOrders"
    v-show="pagination.current_page && filterKeyword.length"
  />
</template>

<script>
import Navbar from "@/components/admin/Navbar";
import Pagination from "@/components/widget/Pagination";
import NoData from "@/components/widget/NoData";
export default {
  components: {
    Navbar,
    Pagination,
    NoData,
  },
  data() {
    return {
      isLoading: false,
      orders: [],
      pagination: {},
      // 資料是否請求完畢
      isReady: false,
      // 篩選的項目
      filterItem: {
        placeholder: "搜尋訂購資訊之姓名、電話、地址、信箱",
      },
      // 搜尋的關鍵字
      keyword: "",
    };
  },
  computed: {
    // 篩選訂單
    filterKeyword() {
      // 若有做篩選
      if (this.keyword) {
        const data = this.orders.filter((item) => {
          let name = item.user.name.toLowerCase();
          let tel = item.user.tel.toLowerCase();
          let address = item.user.address.toLowerCase();
          let email = item.user.email.toLowerCase();
          let keyword = this.keyword.toLowerCase();
          return (
            name.match(keyword) ||
            tel.match(keyword) ||
            address.match(keyword) ||
            email.match(keyword)
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
    this.getOrders();
  },
  methods: {
    // 取得訂單列表
    getOrders(page = 1) {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/admin/orders?page=${page}`;
      this.axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.orders = res.data.orders;
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
    changeKeyword(keyword) {
      this.keyword = keyword;
    },
  },
  watch: {
    // 讓資料請求完成再渲染
    orders() {
      this.isReady = true;
    },
    keyword() {
      this.isReady = true;
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  tbody {
    li {
      margin: 5px 0;
    }
  }
}
</style>
