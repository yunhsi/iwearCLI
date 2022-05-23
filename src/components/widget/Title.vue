<template>
  <div
    class="title"
    :class="rootClass"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="600"
  >
    <h2>{{ tw }}</h2>
    <h5>{{ en }}</h5>
  </div>
</template>

<script>
export default {
  props: ["tw", "en", "rootClass"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_grid";
@import "@/assets/scss/_color";
.title {
  margin-bottom: 15px;
  position: relative;
  h2 {
    letter-spacing: 3px;
    margin-bottom: 0px;
    &::first-letter {
      font-size: 50px;
      color: $red;
    }
  }
  h5 {
    letter-spacing: 2px;
  }
  @include phone {
    h2 {
      font-size: 25px;
      &::first-letter {
        font-size: 40px;
      }
    }
    h5 {
      font-size: 18px;
    }
  }
}
.rwd {
  @include phone {
    text-align: center;
  }
}
</style>
