<template>
  <!-- toast -->
  <Toast :breakpoints="{ '414px': { width: '100%', right: '0', left: '0' } }" />
  <div
    class="modal fade small"
    id="couponModal"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="bsModal"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm"
    >
      <div class="modal-content">
        <!-- header -->
        <div class="modal-header bg-primary text-white">
          <h6 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠券</span>
            <span v-else>編輯優惠券</span>
          </h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form v-slot="{ errors }" @submit="emitUpdateCoupon">
          <!-- body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label"
                    >名稱 <span class="text-danger">*</span></label
                  >
                  <Field
                    name="名稱"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['名稱'] }"
                    placeholder="請輸入名稱"
                    rules="required"
                    v-model="tempCoupon.title"
                  ></Field>
                  <ErrorMessage
                    name="名稱"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="mb-3">
                  <label class="form-label">折扣百分比</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="請輸入折扣百分比"
                    v-model="tempCoupon.percent"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">到期日</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="請輸入到期日"
                    v-model="tempCoupon.due_date"
                  />
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    v-model="tempCoupon.is_enabled"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!-- footer -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="submit" class="btn btn-sm btn-primary">確認</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import toggleModal from "@/js/mixins/toggleModal";
export default {
  props: ["coupon", "isNew"],
  emits: ["updateCoupon"],
  mixins: [toggleModal],
  data() {
    return {
      tempCoupon: {},
    };
  },
  methods: {
    // 把 tempProduct 傳給 Coupons.vue
    emitUpdateCoupon() {
      this.$emit("updateCoupon", this.tempCoupon);
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
  },
  watch: {
    // 當收到 coupon 時，把它複製到 tempCoupon 才能修改值
    coupon() {
      this.tempCoupon = this.coupon;
    },
  },
};
</script>
<style lang="scss" scoped></style>
