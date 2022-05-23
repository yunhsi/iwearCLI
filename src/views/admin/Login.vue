<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />

  <form class="form-login" @submit.prevent="login">
    <h1 class="h2 mb-3 font-weight-normal text-center">後台登入</h1>
    <!-- 帳號 -->
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        placeholder="請輸入Email"
        v-model="user.username"
        required
        autofocus
      />
      <label for="floatingInput">帳號</label>
    </div>
    <!-- 密碼 -->
    <div class="form-floating">
      <input
        :type="isPswShow ? 'text' : 'password'"
        class="form-control"
        placeholder="請輸入密碼"
        v-model="user.password"
        required
      />
      <!-- 密碼顯示隱藏 -->
      <div class="show-psw" @click="showPsw">
        <span v-if="isPswShow">
          <i class="fa-solid fa-eye"></i>
        </span>
        <span v-else>
          <i class="fa-solid fa-eye-slash"></i>
        </span>
      </div>
      <label for="floatingPassword">密碼</label>
    </div>
    <!-- 登入 -->
    <div class="d-grid">
      <button class="btn btn-lg btn-dark btn-block" type="submit">登入</button>
    </div>
    <!-- copyright -->
    <p class="mt-4 mb-3 text-muted text-center copyright">
      &copy;
      <small
        >2022 <a href="/" target="_blank">!wear</a> All Rights Reserved
        <br />
        僅做為學習使用，非商業用途.</small
      >
    </p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      // 使用者帳密
      user: {
        username: "",
        password: "",
      },
      // 密碼顯示隱藏
      isPswShow: false,
    };
  },
  methods: {
    // 登入
    login() {
      this.isLoading = true;
      const api = "https://vue-course-api.hexschool.io/admin/signin";
      this.axios
        .post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            // 在 cookie 寫入 token、expired
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
            //
            this.isLoading = false;
            this.$router.push("/admin/products");
            this.$swal({
              icon: "success",
              title: `${res.data.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            this.isLoading = false;
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
    // 密碼顯示隱藏
    showPsw() {
      this.isPswShow = !this.isPswShow;
    },
  },
};
</script>
<style lang="scss" scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-login {
  width: 100%;
  height: 100vh;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-login input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-login input[type="password"],
.form-login input[type="text"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.show-psw {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.copyright a {
  color: #6c757d;
  transition: all 0.3s;
  &:hover {
    color: #000;
  }
}
</style>
