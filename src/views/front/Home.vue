<template>
  <!-- loader -->
  <loading v-model:active="isLoading" />
  <!-- navbar -->
  <Navbar />
  <!-- banner -->
  <Banner />
  <!-- 熱門推薦 -->
  <section class="container my-4">
    <!-- 標題 -->
    <Title tw="熱銷商品" en="Recommendation" rootClass="text-center" />
    <!-- 商品輪播 -->
    <ProductCarousel :products="recommendation" :isloop="true" />
    <!-- 按鈕 -->
    <div
      class="d-flex justify-content-end me-4"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="600"
    >
      <router-link
        to="/products"
        class="btn btn-outline-danger hvr-icon-forward"
      >
        View More
        <i class="fa fa-chevron-circle-right hvr-icon"></i>
      </router-link>
    </div>
  </section>
  <!-- 框型簡介 -->
  <section class="type py-5">
    <div class="container py-3">
      <div class="row align-items-center">
        <!-- 標題 -->
        <div class="col-lg-3">
          <Title tw="框型簡介" en="Types Of Frames" rootClass="rwd" />
        </div>
        <!-- 框型 -->
        <div class="col-lg-9">
          <div class="row">
            <!-- 圓 -->
            <div class="col-6 col-md-3">
              <a
                href="javascript:;"
                class="hvr-float-shadow text-dark"
                @click="goToType('round')"
              >
                <div
                  class="card shadow"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <img
                    src="https://jp.owndays.com/images/frame-types/round.svg"
                    alt=""
                  />
                  <small>
                    圓框款
                    <br />
                    清新柔和風格
                  </small>
                </div>
              </a>
            </div>
            <!-- 方 -->
            <div class="col-6 col-md-3">
              <a
                href="javascript:;"
                class="hvr-float-shadow text-dark"
                @click="goToType('square')"
              >
                <div
                  class="card shadow"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <img
                    src="https://jp.owndays.com/images/frame-types/square.svg"
                    alt=""
                  />
                  <small>
                    方型款
                    <br />
                    簡潔俐落風格
                  </small>
                </div>
              </a>
            </div>
            <!-- 波 -->
            <div class="col-6 col-md-3">
              <a
                href="javascript:;"
                class="hvr-float-shadow text-dark"
                @click="goToType('boston')"
              >
                <div
                  class="card shadow"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <img
                    src="https://jp.owndays.com/images/frame-types/boston.svg"
                    alt=""
                  />
                  <small>
                    波士頓
                    <br />
                    流行時尚風格
                  </small>
                </div>
              </a>
            </div>
            <!-- 威 -->
            <div class="col-6 col-md-3">
              <a
                href="javascript:;"
                class="hvr-float-shadow text-dark"
                @click="goToType('wellington')"
              >
                <div
                  class="card shadow"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <img
                    src="https://jp.owndays.com/images/frame-types/wellington.svg"
                    alt=""
                  />
                  <small>
                    威靈頓
                    <br />
                    經典風格
                  </small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 商品特色 -->
  <section class="container">
    <div class="row feature">
      <!-- 1 -->
      <div
        class="col-6 col-md-4 d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="media">
          <img
            src="https://static.gotoo.cloud/jins-official/icon/icon_index_tokyodesign.svg"
            alt=""
          />
          <div class="media-body">
            <p>所有鏡框<br />英國設計</p>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div
        class="col-6 col-md-4 d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="media">
          <img
            src="https://static.gotoo.cloud/jins-official/icon/icon_index_0yen.svg"
            alt=""
          />
          <div class="media-body">
            <p>無論任何度數<br />追加費用都是0元</p>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div
        class="col-6 col-md-4 d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="media">
          <img
            src="https://static.gotoo.cloud/jins-official/icon/icon_index_quality.svg"
            alt=""
          />
          <div class="media-body">
            <p>無論何處製造<br />堅持嚴守優良品質</p>
          </div>
        </div>
      </div>
      <!-- 4 -->
      <div
        class="col-6 col-md-4 d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="media">
          <img
            src="https://static.gotoo.cloud/jins-official/icon/icon_index_delivery.svg"
            alt=""
          />
          <div class="media-body">
            <p>當日<br />交件服務</p>
          </div>
        </div>
      </div>
      <!-- 5 -->
      <div
        class="col-6 col-md-4 d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="media">
          <img
            src="https://static.gotoo.cloud/jins-official/icon/icon_index_service.svg"
            alt=""
          />
          <div class="media-body">
            <p>讓您『安心』<br />充實可靠的售後服務</p>
          </div>
        </div>
      </div>
      <!-- 6 -->
      <div
        class="col-6 col-md-4 d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div class="media">
          <img
            src="https://static.gotoo.cloud/jins-official/icon/icon_index_lens.svg"
            alt=""
          />
          <div class="media-body">
            <p>薄型非球面鏡片<br />為標準配備</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 門市資訊 -->
  <section class="store">
    <div class="mask"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-6 col-11">
          <div class="info shadow">
            <Title tw="門市資訊" en="Store Information" />
            <div
              class="text-muted"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <ul class="nav flex-column mb-3 text-dark">
                <li class="nav-item">台中市台中區台中街57巷8號</li>
                <li class="nav-item">
                  <a href="tel:0409876543" class="text-dark"> 04-0987-6543 </a>
                </li>
                <li class="nav-item">營業時間：週一～週日：11:00～22:00</li>
              </ul>
              <a
                href="https://goo.gl/maps/xjUnhNYuYxxZu3G79"
                target="_blank"
                class="btn btn-secondary"
              >
                Google 地圖
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- footer -->
  <Footer />
  <!-- go top -->
  <GoTop />
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/front/Navbar.vue";
import Banner from "@/components/front/Banner.vue";
import Title from "@/components/widget/Title.vue";
import ProductCarousel from "@/components/widget/ProductCarousel.vue";
import Footer from "@/components/front/Footer.vue";
import GoTop from "@/components/widget/GoTop.vue";
export default {
  components: {
    Navbar,
    Banner,
    Title,
    ProductCarousel,
    Footer,
    GoTop,
  },
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  computed: {
    // 取得推薦商品
    recommendation() {
      return this.products.filter((item) => {
        return item.origin_price == true;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    // 取得全部商品
    getProducts() {
      this.isLoading = true;
      const api = `https://vue-course-api.hexschool.io/api/yunhsi/products/all`;
      this.axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: `${err}`,
          });
        });
    },
    // 前往某框型的商品頁
    goToType(frameType) {
      this.$store.commit("setFrameType", {
        type: frameType,
        isChange: true,
      });
      this.$router.push("/products");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_grid";
section {
  padding: 60px 0;
  @include phone {
    padding: 30px 0;
  }
  // 商品特色
  .feature {
    .media {
      text-shadow: 0 0 0.2em #fdc7d7;
      font-weight: lighter;
      display: flex;
      align-items: center;
      padding: 45px 0;
      // 響應式
      @include pad {
        display: flex;
        flex-direction: column;
        text-align: center;
        img {
          margin: 0 !important;
          padding-bottom: 10px;
        }
      }
      @include phone {
        font-size: 12px;
      }
      p {
        margin: 0;
      }
      img {
        margin-right: 15px;
      }
    }
  }
}
// 框型簡介
.type {
  background: linear-gradient(#eee, #fff, #eee);
  .col-lg-9 {
    // 響應式
    @include pad {
      padding-top: 30px;
    }
    @media screen and (max-width: 767px) {
      .col-6 {
        display: flex;
        justify-content: center;
        a {
          margin-bottom: 30px;
        }
        .card {
          width: 190px;
          height: 190px;
          small {
            font-size: 15px !important;
          }
          @include phone {
            width: 155px;
            height: 155px;
          }
        }
      }
    }
    .card {
      padding: 20px;
      justify-content: center;
      text-align: center;
      border-radius: 50%;
      border: 1px solid #fff;
      width: 155px;
      height: 155px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      small {
        padding-top: 10px;
        font-size: 13px;
      }
    }
  }
}
// 門市資訊
.store {
  background: url("~@/assets/images/index-2.jpg") no-repeat center/cover;
  position: relative;
  .info {
    width: 100%;
    padding: 30px;
    background: rgba(255, 255, 255, 0.7);
    display: inline-block;
    border-radius: 5px;
    position: relative;
    .nav {
      padding-top: 30px;
      .nav-item {
        padding-bottom: 10px;
      }
    }
    .btn {
      font-size: 15px;
      letter-spacing: 1.5px;
    }
  }
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  pointer-events: none;
  backdrop-filter: blur(2px);
}
</style>
