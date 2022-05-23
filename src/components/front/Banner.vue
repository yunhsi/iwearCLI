<template>
  <header
    id="carouselExampleSlidesOnly"
    class="carousel slide carousel-fade position-relative"
    data-bs-ride="carousel"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="400"
    data-aos-delay="500"
  >
    <!-- 輪播圖 -->
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="@/assets/images/banner-1.jpg" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="@/assets/images/banner-2.jpg" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="@/assets/images/banner-3.jpg" class="d-block w-100" alt="" />
      </div>
    </div>
    <!-- scroll -->
    <div class="scroll">
      <small>SCROLL</small>
      <i
        class="fas fa-angle-down animate__animated animate__fadeInDown animate__infinite"
      ></i>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
img {
  height: 100vh;
  object-fit: cover;
  object-position: center;
}
.scroll {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  small {
    letter-spacing: 2px;
    font-weight: 400;
    margin-bottom: 10px;
  }
}
</style>
