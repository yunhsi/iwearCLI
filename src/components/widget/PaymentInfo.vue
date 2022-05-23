<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <div class="border border-danger p-4 rounded shadow-sm mt-4 mt-md-0">
    <h4 class="mb-1">訂購資訊</h4>
    <small class="text-muted pb-2" style="font-size: 12px; display: block">
      建立時間：{{ $filters.date(order.create_at) }}
    </small>
    <table class="table mb-4 small">
      <tbody>
        <tr class="border-bottom">
          <th class="border-0 px-0 fw-normal">收件人姓名</th>
          <td class="text-end border-0 px-0" v-if="userData">
            {{ userData.name }}
          </td>
          <td class="text-end border-0 px-0" v-else>{{ user.name }}</td>
        </tr>
        <tr class="border-bottom">
          <th class="border-0 px-0 fw-normal">收件人電話</th>
          <td class="text-end border-0 px-0" v-if="userData">
            {{ userData.tel }}
          </td>
          <td class="text-end border-0 px-0" v-else>{{ user.tel }}</td>
        </tr>
        <tr class="border-bottom">
          <th class="border-0 px-0 fw-normal">收件人地址</th>
          <td class="text-end border-0 px-0" v-if="userData">
            {{ userData.address }}
          </td>
          <td class="text-end border-0 px-0" v-else>{{ user.address }}</td>
        </tr>
        <tr class="border-bottom">
          <th class="border-0 px-0 fw-normal">付款方式</th>
          <td class="text-end border-0 px-0" v-if="userData">
            {{ userData.payment }}
          </td>
          <td class="text-end border-0 px-0" v-else>{{ user.payment }}</td>
        </tr>
        <tr class="border-bottom">
          <th class="border-0 px-0 fw-normal">付款狀態</th>
          <td class="text-end border-0 px-0">
            <span class="badge rounded-pill bg-success" v-if="order.is_paid"
              >付款完成</span
            >
            <span class="badge rounded-pill bg-secondary" v-else>尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-show="!isPaid">
      <div class="d-grid gap-2" v-if="!order.is_paid">
        <button type="button" class="btn btn-danger" @click="checkoutConfirm">
          結帳去
        </button>
      </div>
      <div class="d-grid gap-2" v-else>
        <router-link to="/products" class="btn btn-danger"
          >回到商品頁</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    order: {
      type: Object,
      default: () => ({}),
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: false,
      user: {},
    };
  },
  computed: {
    userData() {
      return this.order.user;
    },
  },
  watch: {
    order() {
      this.user = this.order.user;
    },
  },
  methods: {
    // 是否確認結帳
    checkoutConfirm() {
      this.$swal({
        title: "是否確定結帳?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#dc3534",
        cancelButtonText: "取消",
        confirmButtonText: "是的！",
      }).then((result) => {
        if (result.isConfirmed) {
          this.checkout();
        }
      });
    },
    // 結帳
    checkout() {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/pay/${this.id}`;
      this.axios
        .post(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({
              icon: "success",
              title: `${res.data.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push(`/checkout/${this.id}`);
          }
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: `${err}`,
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  font-weight: bold;
  font-size: 15px;
}
</style>
