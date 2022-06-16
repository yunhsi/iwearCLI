<template>
  <div class="go-top text-secondary hvr-sink" @click="goTop">
    <i class="fas fa-angle-up text-center"></i>
    <small>TOP</small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goTopTag: "",
    };
  },
  mounted() {
    this.goTopTag = document.querySelector(".go-top");
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      if (window.scrollY > 200) {
        this.goTopTag.classList.add("scrolled");
      } else {
        this.goTopTag.classList.remove("scrolled");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_grid";
.go-top {
  position: fixed;
  right: 40px;
  bottom: 55px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: all 0.3s;
  z-index: 10;
  cursor: pointer;
  @include pad {
    right: 30px;
  }
  small {
    font-size: 12px;
    font-weight: light;
  }
}
.scrolled {
  opacity: 1;
}
</style>
