<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-sm justify-content-center">
      <li class="page-item" :class="{ disable: !pagination.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click="emitGetProduct(pagination.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pagination.total_pages"
        :key="page"
        :class="{ active: pagination.current_page === page }"
      >
        <a class="page-link" href="#" @click="emitGetProduct(page)">{{
          page
        }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disable: !pagination.has_next }"
        @click="emitGetProduct(pagination.current_page + 1)"
      >
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["pagination"],
  emits: ["getList"],
  methods: {
    emitGetProduct(page) {
      this.$emit("getList", page);
    },
  },
};
</script>
<style lang="scss" scoped>
.page-link {
  color: #000;
}
.page-item.active .page-link {
  background: #000;
  border-color: #000;
}
</style>
