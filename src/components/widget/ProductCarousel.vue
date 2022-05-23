<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- toast -->
  <Toast :breakpoints="{ '414px': { width: '100%', right: '0', left: '0' } }" />
  <!-- swiper -->
  <swiper
    :speed="800"
    :loop="isloop"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
    :breakpoints="{
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      414: {
        slidesPerView: 1,
      },
    }"
    navigation
    :pagination="{ clickable: true }"
    data-aos="fade-up"
    data-aos-duration="700"
    data-aos-delay="300"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <ProductCard :product="item" @addToCart="showMsg" />
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Autoplay]);

import ProductCard from "@/components/widget/ProductCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductCard,
  },
  props: ["products", "isloop"],
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
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
    // 購物車訊息提示
    showMsg(msg) {
      this.isLoading = true;
      setTimeout(() => {
        if (msg) {
          this.showSuccessMsg(msg);
          this.isLoading = false;
        }
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  padding-bottom: 30px;
}
</style>
