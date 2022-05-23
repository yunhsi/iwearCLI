<template>
  <div class="container-fluid">
    <div class="row">
      <!-- sidebar -->
      <Sidebar />
      <!-- main -->
      <main role="main" class="col-md-10 ms-sm-auto px-4 position-relative">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/admin/Sidebar";
export default {
  components: {
    Sidebar,
  },
  created() {
    // 在 Headers 寫入 token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.axios.defaults.headers.common.Authorization = `${token}`;
    //
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_grid";
body {
  font-size: 0.875rem;
}
[role="main"] {
  padding-top: 48px; /* Space for fixed navbar */
  margin-top: 20px;
  min-height: calc(100vh - 48px);
  @include pad {
    padding-top: 80px;
  }
}
</style>
