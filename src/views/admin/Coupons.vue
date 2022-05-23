<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- toast -->
  <Toast :breakpoints="{ '414px': { width: '100%', right: '0', left: '0' } }" />
  <!-- navbar -->
  <Navbar :filterItem="filterItem" @changeKeyword="changeKeyword" />
  <div class="d-flex justify-content-between">
    <!-- title -->
    <h1 class="h3 m-0 d-flex align-items-center">優惠券管理</h1>
    <!-- 新增優惠券 -->
    <button
      type="button"
      class="btn btn-sm btn-primary d-block d-flex align-items-center"
      @click="openModal(true)"
    >
      <span class="material-icons pe-2">add_circle</span>新增優惠券
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
  <!-- 優惠券列表 -->
  <Transition v-if="isReady" name="fade">
    <div class="pt-3" v-show="filterKeyword.length">
      <table class="table table-hover align-middle">
        <!-- 標題 -->
        <thead>
          <tr>
            <th scope="col">名稱</th>
            <th class="text-center" scope="col">折扣百分比</th>
            <th class="text-center" scope="col">到期日</th>
            <th class="text-center" scope="col">啟用</th>
            <th class="text-center" scope="col"></th>
          </tr>
        </thead>
        <!-- 列表 -->
        <tbody class="small">
          <tr v-for="item in filterKeyword" :key="item.id">
            <th scope="row">{{ item.title }}</th>
            <td class="text-center">{{ item.percent }}%</td>
            <td class="text-center">
              {{ item.due_date ? item.due_date : "-" }}
            </td>
            <td class="text-center">
              <span v-if="item.is_enabled" class="text-success material-icons"
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
    </div>
  </Transition>
  <!-- no data -->
  <Transition v-if="isReady" name="fade">
    <NoData v-show="!filterKeyword.length" :keyword="keyword" />
  </Transition>
  <!-- 頁碼 -->
  <Pagination
    :pagination="pagination"
    @getList="getCoupons"
    v-show="pagination.current_page && filterKeyword.length"
  />
  <!-- couponModal -->
  <CouponModal
    :coupon="tempCoupon"
    :isNew="isNew"
    @updateCoupon="updateCoupon"
    ref="couponModal"
  />
</template>

<script>
import Navbar from "@/components/admin/Navbar";
import Pagination from "@/components/widget/Pagination";
import CouponModal from "@/components/admin/CouponModal";
import NoData from "@/components/widget/NoData";
export default {
  components: {
    Navbar,
    Pagination,
    CouponModal,
    NoData,
  },
  data() {
    return {
      isLoading: false,
      coupons: [],
      pagination: {},
      isNew: false,
      tempCoupon: {},
      isReady: false,
      // 篩選的項目
      filterItem: {
        placeholder: "搜尋優惠券名稱",
      },
      // 搜尋的關鍵字
      keyword: "",
      // 排序的選項
      sortItem: {
        0: "原順序",
        1: "到期日近到遠",
        2: "到期日遠到近",
      },
      // 選中的排序
      sortType: "0",
    };
  },
  computed: {
    // 篩選優惠券名稱
    filterKeyword() {
      if (this.keyword) {
        // 若有做篩選
        const data = this.coupons.filter((item) => {
          let content = item.title.toLowerCase();
          let keyword = this.keyword.toLowerCase();
          return content.match(keyword);
        });
        // 判斷是否有排序
        if (this.sortType) {
          data.sort((t1, t2) => {
            let a = new Date(t1.due_date);
            let b = new Date(t2.due_date);
            return this.sortType == 1 ? b - a : a - b;
          });
        }
        return data;
      } else {
        // 若沒做篩選
        const data = this.coupons;
        // 判斷是否有排序
        if (this.sortType) {
          data.sort((t1, t2) => {
            let a = new Date(t1.due_date);
            let b = new Date(t2.due_date);
            return this.sortType == 1 ? b - a : a - b;
          });
        }
        return data;
      }
    },
  },
  mounted() {
    this.getCoupons();
  },
  methods: {
    // 點開優惠券 modal
    openModal(isNew, item) {
      this.$refs.couponModal.showModal();
      if (isNew) {
        // 新增的
        this.tempCoupon = {};
        this.isNew = true;
      } else {
        // 編輯的
        this.tempCoupon = Object.assign({}, item); // 避免物件參考
        this.isNew = false;
      }
    },
    // 取得優惠券列表
    getCoupons(page = 1) {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/admin/coupons?page=${page}`;
      this.axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.coupons = res.data.coupons;
            this.pagination = res.data.pagination;
            this.$refs.couponModal.hideModal();
          }
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: `${err}`,
          });
        });
    },
    // 新增 or 編輯優惠券
    updateCoupon() {
      this.isLoading = true;
      let api = "";
      let httpMethod = "";
      if (this.isNew) {
        // 新增優惠券
        api = "https://vue-course-api.hexschool.io/api/yunhsi/admin/coupon";
        httpMethod = "post";
      } else {
        // 編輯優惠券
        api = `https://vue-course-api.hexschool.io/api/yunhsi/admin/coupon/${this.tempCoupon.id}`;
        httpMethod = "put";
      }
      // 傳入 tempCoupon 物件，請求 api
      this.axios[httpMethod](api, { data: this.tempCoupon })
        .then((res) => {
          if (res.data.success) {
            this.getCoupons();
            setTimeout(() => {
              this.showSuccessMsg(res.data.message);
            }, 500);
            this.$refs.couponModal.hideModal();
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
          this.deleteCoupon(id);
        }
      });
    },
    // 刪除優惠券
    deleteCoupon(id) {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/admin/coupon/${id}`;
      this.axios
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getCoupons();
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
    coupons() {
      this.isReady = true;
    },
    keyword() {
      this.isReady = true;
    },
  },
};
</script>

<style></style>
