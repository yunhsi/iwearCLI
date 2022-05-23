<template>
  <div class="row g-0 pt-5 pb-md-5 pb-4 mt-2 small progress-wrap">
    <!-- 1 -->
    <div class="col-3 text-center text-danger">
      <span class="progress-num">1</span>
      <span class="progress-text">確認品項</span>
      <div class="progress mt-2" style="height: 2px">
        <div class="progress-bar" role="progressbar" :class="step1Class"></div>
      </div>
    </div>
    <!-- 2 -->
    <div class="col-3 text-center text-danger">
      <span class="progress-num">2</span>
      <span class="progress-text">建立訂單</span>
      <div class="progress mt-2" style="height: 2px">
        <div class="progress-bar" role="progressbar" :class="step2Class"></div>
      </div>
    </div>
    <!-- 3 -->
    <div class="col-3 text-center text-danger">
      <span class="progress-num">3</span>
      <span class="progress-text">確認付款</span>
      <div class="progress mt-2" style="height: 2px">
        <div class="progress-bar" role="progressbar" :class="step3Class"></div>
      </div>
    </div>
    <!-- 4 -->
    <div class="col-3 text-center text-danger">
      <span class="progress-num">4</span>
      <span class="progress-text">完成訂單</span>
      <div class="progress mt-2" style="height: 2px">
        <div class="progress-bar" role="progressbar" :class="step4Class"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["step1Class", "step2Class", "step3Class", "step4Class"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_color";
.progress-wrap {
  .progress-num {
    width: 22px;
    height: 22px;
    border: 1px solid $red;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
  .progress-text {
    letter-spacing: 1px;
  }
}
.active {
  width: 100%;
  background: $red;
}
</style>
