<template>
  <div class="border border-danger p-4 rounded shadow-sm">
    <div class="mb-4">
      <h4 class="mb-1">{{ title }}</h4>
      <small
        class="text-muted"
        style="font-size: 12px; display: block"
        v-show="title == '訂單明細'"
      >
        訂單編號：{{ order.id }}
      </small>
    </div>
    <div
      class="d-flex align-items-center my-2"
      v-for="item in orders"
      :key="item.id"
    >
      <img :src="item.product.image" alt="" class="me-3 rounded" />
      <div
        class="w-100 d-flex justify-content-between align-items-center small"
      >
        <p class="mb-0 pe-4">
          <span class="h6 fw-normal">{{ item.product.title }}</span>
          <br />
          <span class="pt-1 d-block small">數量：{{ item.qty }}</span>
        </p>
        <p class="mb-0">${{ $filters.currency(item.final_total) }}</p>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-4 pt-4 border-top">
      <p class="h5">總金額</p>
      <p class="h5 fw-normal">${{ $filters.currency(total) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    cart: {
      type: Object,
      default: () => ({}),
    },
    order: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      orders: [],
      total: 0,
    };
  },
  watch: {
    cart() {
      this.orders = this.cart.carts;
      this.total = this.cart.final_total;
    },
    order() {
      this.orders = this.order.products;
      this.total = this.order.total;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 75px;
  object-fit: cover;
  object-position: center;
}
</style>
