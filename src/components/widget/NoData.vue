<template>
  <div class="position-absolute">
    <template v-if="keyword">
      <h2>(*´･д･)?</h2>
      <p><small>No Found For：</small>' {{ keyword }} '</p>
    </template>
    <template v-else>
      <h2>(*ˋ･ω･ˊ*)</h2>
      <p class="fw-normal">目前沒有資料</p>
    </template>
  </div>
</template>

<script>
export default {
  props: ["keyword"],
};
</script>

<style lang="scss" scoped>
.position-absolute {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  color: rgba(0, 0, 0, 0.75);
  pointer-events: none;
  h2 {
    font-size: 100px;
  }
  p {
    font-size: 30px;
    text-align: center;
    word-break: break-all;
    padding: 10px;
  }
  .fw-normal {
    letter-spacing: 2px;
  }
}
</style>
