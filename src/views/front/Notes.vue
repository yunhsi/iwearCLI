<template>
  <!-- navbar -->
  <Navbar rootClass="page-navbar" />
  <div>
    <!-- main -->
    <main style="padding-top: 73px; min-height: calc(100vh - 104px)">
      <div class="container py-5">
        <nav aria-label="breadcrumb" class="breadcrumb-wrap">
          <ol class="breadcrumb small">
            <li class="breadcrumb-item">
              <a href="#"><i class="fa-solid fa-house"></i></a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">購物說明</li>
          </ol>
        </nav>
        <div class="row justify-content-center pt-4">
          <div class="col-12 col-lg-9">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    付款方式說明
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <ol>
                      <li>
                        目前提供銀行轉帳、信用卡線上支付、7-11超商取貨付款、全家超商取貨付款。
                      </li>
                      <li>如有其他需求請來信詢問（FB / IG / LINE）</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    寄送方式說明
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <ol>
                      <li>
                        目前提供國內郵寄宅配、7-11超商取貨、全家超商取貨。
                      </li>
                      <li>
                        除特殊情況，每週二、五、六
                        17:00前為訂單出貨時間。郵寄週六、週日無法出貨。
                      </li>
                      <li>運送時間：在「一般情況」為寄出日後2~3日送達。</li>
                      <li>如有其他需求請來信詢問（FB / IG / LINE）</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    訂單相關說明
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                    <ol>
                      <li>訂單收件人姓名、電話、地址可以查詢訂單狀態。</li>
                      <li>如有其他需求請來信詢問（FB / IG / LINE）</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    售後服務說明
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body">
                    <p>
                      非常感謝您購買我們的商品：）
                      <br />
                      為了提供顧客更好的線上購物經驗，依據消保法之「七天鑑賞期」，我們提供以下售後服務。
                    </p>
                    <h6>一、商品到貨七日內如有以下情況，可無條件退換貨：</h6>
                    <ol>
                      <li>品項、數量與訂購不符。</li>
                      <li>運送破損。</li>
                      <li>商品瑕疵。</li>
                    </ol>
                    <h6>二、以下情況恕不提供退換貨服務：</h6>
                    <ol>
                      <li>品項、數量與訂購不符。</li>
                      <li>到貨超過七日。</li>
                      <li>商品經過拆封使用。</li>
                    </ol>
                    <h6>三、其他退換貨說明：</h6>
                    <ol>
                      <li>
                        如有以上需要退換貨的情況，請來信（FB / IG /
                        LINE）告知，我們將協助處理。
                      </li>
                      <li>
                        如因商品的顏色、尺寸等等其他因素需要換貨，須酌收換貨所產生的運費。
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- footer -->
    <Footer />
  </div>
  <!-- go top -->
  <GoTop />
</template>

<script>
import Navbar from "@/components/front/Navbar.vue";
import Footer from "@/components/front/Footer.vue";
import GoTop from "@/components/widget/GoTop.vue";
export default {
  components: {
    Navbar,
    Footer,
    GoTop,
  },
};
</script>

<style lang="scss" scoped></style>
