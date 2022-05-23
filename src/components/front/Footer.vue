<template>
  <footer class="bg-dark">
    <div class="container py-3">
      <p class="m-0 copyright text-center">
        <!-- copyright -->
        © 2022
        <router-link to="/">!wear</router-link> All Rights Reserved
        <br />
        <!-- 後台登入 -->
        <small class="d-block py-1"
          >僅做為學習使用，非商業用途. ｜
          <router-link to="/admin/login" class="small"
            >登入後台</router-link
          ></small
        >
      </p>
      <!-- social media -->
      <ul class="d-flex justify-content-center list-unstyled m-0">
        <li>
          <a href="https://github.com/yunhsi?tab=repositories" target="_blank"
            ><i class="fa-brands fa-github"></i
          ></a>
        </li>
        <li>
          <a href="https://medium.com/@cles30102" target="_blank" class="mx-4"
            ><i class="fa-brands fa-medium"></i
          ></a>
        </li>
        <li>
          <a href="https://codepen.io/your-work?item_type=pen" target="_blank"
            ><i class="fa-brands fa-codepen"></i
          ></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
}
a {
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
  &:hover {
    color: #fff;
  }
}
p {
  font-size: 14px;
}
</style>
