<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./assets/scss/all";
@import "@/assets/scss/_grid";
// reset
textarea:focus,
textarea.form-control:focus,
input.form-control:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="checkbox"]:focus,
[type="text"].form-control:focus,
[type="password"].form-control:focus,
[type="email"].form-control:focus,
[type="tel"].form-control:focus,
[contenteditable].form-control:focus,
.btn:focus,
.btn-check:focus,
button:focus,
a:focus,
select:focus,
.page-link:focus {
  box-shadow: inset 0 0 0 #fff !important;
  outline: 0 !important;
}
.form-control:focus {
  border-color: #ced4da !important;
}
a {
  text-decoration: none !important;
}
select {
  background: #fff;
  color: #000;
  border-radius: 0;
}

body,
html {
  overflow-x: hidden;
}

// 套件樣式
.p-toast,
.swal2-container {
  z-index: 10000 !important;
}
.tooltip .p-tooltip-text {
  font-size: 12px;
  letter-spacing: 1px;
}
:root {
  --swiper-theme-color: rgba(220, 53, 69, 0.8) !important;
}

// modal 樣式
.modal-backdrop {
  display: none;
}
.modal {
  background: rgba(0, 0, 0, 0.5);
}
.overflow-auto {
  overflow: auto !important;
}

// button
.btn {
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
}

// logo 樣式
.navbar-brand,
.copyright a {
  font-family: "Major Mono Display";
}

// transition 樣式
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

.breadcrumb {
  margin: 0;
  letter-spacing: 1px;

  @include pad {
    margin-bottom: 15px;
  }
  .breadcrumb-item {
    a {
      color: #000;
    }
  }
  .active {
    color: #6c757d;
  }
}

.search-bar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 10px;
  @include pad {
    flex-direction: column;
    align-items: start;
    margin: 0;
  }

  .wrap {
    position: relative;
    width: 180px;
    margin-right: 10px;
    .material-icons {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    input {
      padding-left: 40px;
      width: 180px;
      border: none;
      border-bottom: 1px solid #aaa;
      border-radius: 0;
    }
  }
  p {
    margin: 0;
    display: flex;
    align-items: center;
    position: relative;
    .material-icons {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      @include pad_pro {
        display: none;
      }
    }
    select {
      border: none;
      border-bottom: 1px solid #aaa;
      padding: 5px 0;
      padding-left: 40px;
    }
  }
}

.accordion {
  line-height: 1.8;
  font-size: 14px;
  li {
    padding-bottom: 5px;
  }
  .accordion-header {
    .accordion-button {
      font-weight: bold;
      border-bottom: 1px solid #ddd;
    }
    .accordion-button:not(.collapsed) {
      color: #000;
      background: #fff;
      box-shadow: none;
    }
  }
}

.list-hover {
  transition: all 0.3s;
  &:hover {
    background-color: #f5f5f5;
  }
}

.close {
  transition: all 0.3s;
  color: gray !important;
  &:hover {
    color: #000 !important;
  }
}
</style>
