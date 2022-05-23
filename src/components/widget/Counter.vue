<template>
  <div class="input-group">
    <button
      class="btn btn-outline-secondary px-2"
      :class="{ disabled: tempCount == 1 }"
      type="button"
      @click="emitReduceCount"
    >
      -
    </button>
    <input
      type="text"
      class="form-control text-center border-secondary p-0"
      v-model="tempCount"
      readonly
    />
    <button
      class="btn btn-outline-secondary px-2"
      type="button"
      @click="emitAddCount"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  props: ["count"],
  emits: ["addCount", "reduceCount"],
  data() {
    return {
      tempCount: this.count,
    };
  },
  methods: {
    emitReduceCount() {
      this.$emit("reduceCount", this.tempCount);
    },
    emitAddCount() {
      this.$emit("addCount", this.tempCount);
    },
  },
  watch: {
    // 當收到 count 時，把它複製到 tempCount 才能修改值
    count() {
      this.tempCount = this.count;
    },
  },
};
</script>

<style lang="scss" scoped></style>
