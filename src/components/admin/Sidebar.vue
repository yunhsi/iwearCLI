<template>
  <!-- 手機版 -->
  <Transition v-show="isMenuOpen" name="slide">
    <nav class="col-md-2 bg-light sidebar">
      <div class="sidebar-sticky">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>後台管理</span>
        </h6>
        <ul class="nav flex-column mb-2 small">
          <li class="nav-item">
            <router-link
              to="/admin/products"
              class="nav-link"
              @click.prevent="closeMenu"
            >
              <i class="fas fa-box-open"></i>
              商品管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/admin/orders"
              class="nav-link"
              @click.prevent="closeMenu"
              ><i class="fas fa-clipboard-list px-1"></i> 訂單管理
            </router-link>
          </li>
          <li class="nav-item pb-3">
            <router-link
              to="/admin/coupons"
              class="nav-link"
              @click.prevent="closeMenu"
              ><i class="fas fa-ticket-alt"></i> 優惠券管理
            </router-link>
          </li>
          <li class="nav-item border-top pt-2 small">
            <a
              href="/"
              target="_blank"
              class="nav-link text-muted"
              @click.prevent="closeMenu"
            >
              查看前台 <i class="fas fa-external-link"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </Transition>
  <!-- 桌機版 -->
  <nav class="col-md-2 bg-light sidebar desktop">
    <div class="sidebar-sticky p-0">
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>後台管理</span>
      </h6>
      <ul class="nav flex-column mb-2 small">
        <li class="nav-item">
          <router-link to="/admin/products" class="nav-link">
            <i class="fas fa-box-open"></i>
            商品管理
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/orders" class="nav-link"
            ><i class="fas fa-clipboard-list px-1"></i> 訂單管理
          </router-link>
        </li>
        <li class="nav-item pb-3">
          <router-link to="/admin/coupons" class="nav-link"
            ><i class="fas fa-ticket-alt"></i> 優惠券管理
          </router-link>
        </li>
        <li class="nav-item border-top pt-2 small">
          <a href="/" target="_blank" class="nav-link text-muted">
            查看前台 <i class="fas fa-external-link"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    isMenuOpen() {
      return this.$store.state.isMenuOpen;
    },
  },
  methods: {
    closeMenu() {
      this.$store.commit("toggleMenu");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/_grid";
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 40px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  @include pad {
    padding-top: 75px;
  }
}

.desktop {
  @include pad {
    display: none;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 40px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>
