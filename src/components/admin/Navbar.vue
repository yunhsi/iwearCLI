<template>
  <nav
    class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow small"
  >
    <div
      class="col-12 col-md-2 d-flex align-items-center justify-content-between pe-3"
    >
      <router-link to="/admin/products" class="navbar-brand ps-2">
        <i class="fa-solid fa-glasses pe-2"></i>!wear
      </router-link>
      <a href="#" class="menu-btn" @click.prevent="openMenu">
        <i class="fas fa-bars text-white"></i>
      </a>
    </div>
    <div class="input-group">
      <input
        type="Search"
        class="form-control rounded-0 bg-light border-0"
        :placeholder="filterItem.placeholder"
        v-model.trim="keyword"
        @input="emitChangeKeyword(keyword)"
      />
    </div>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#" @click.prevent="logout">登出</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["filterItem"],
  emits: ["changeKeyword"],
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // 登出
    logout() {
      const api = "https://vue-course-api.hexschool.io/logout";
      this.axios
        .post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/admin/login");
            this.$swal({
              icon: "success",
              title: `${res.data.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            this.$swal({
              icon: "error",
              title: `${res.data.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: `${err}`,
          });
        });
    },
    openMenu() {
      // 觸發 store 的方法
      this.$store.commit("toggleMenu");
    },
    emitChangeKeyword(keyword) {
      this.$emit("changeKeyword", keyword);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_grid";
nav {
  .menu-btn {
    display: none;
    @include pad {
      display: block;
    }
  }
  .navbar-nav {
    @include pad {
      display: none;
    }
  }
}
</style>
