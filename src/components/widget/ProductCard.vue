<template>
  <div class="card text-center hvr-float d-block">
    <router-link :to="`/product/${product.id}`">
      <!-- 產品圖片 -->
      <img :src="product.image" alt="" />
      <!-- 產品資訊 -->
      <div class="p-3 pb-2">
        <p class="fw-light">{{ product.title }}</p>
        <h6 class="fw-bolder">NTD {{ $filters.currency(product.price) }}</h6>
      </div>
    </router-link>
    <div class="d-grid gap-2 mx-3 py-2">
      <button
        class="btn btn-sm btn-outline-danger"
        type="button"
        @click="addToCart(product.id)"
      >
        加入購物車
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  emits: ["addToCart"],
  data() {
    return {};
  },
  methods: {
    // 加入購物車
    addToCart(id, qty = 1) {
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.axios
        .post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.$emit("addToCart", res.data.message);
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
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 20px;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 0.5rem 1rem rgba(10, 10, 10, 0.15);
  border: 1px solid #fff;
  position: relative;
  &:hover {
    box-shadow: 0 0.25rem 0.5rem rgba(10, 10, 10, 0.15);
  }
  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    object-position: center;
  }
  p {
    margin: 0;
    text-transform: capitalize;
    font-size: 15px;
  }
  h6 {
    margin: 0;
    padding-top: 5px;
    font-size: 14px;
  }
  a {
    color: #000;
  }
}
</style>
