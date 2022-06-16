<template>
  <!-- toast -->
  <Toast :breakpoints="{ '414px': { width: '100%', right: '0', left: '0' } }" />
  <div
    class="modal fade small"
    id="productModal"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="bsModal"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
    >
      <div class="modal-content">
        <!-- header -->
        <div class="modal-header bg-primary text-white">
          <h6 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增商品</span>
            <span v-else>編輯商品</span>
          </h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form v-slot="{ errors }" @submit="emitUpdateProduct">
          <!-- body -->
          <div class="modal-body">
            <div class="row">
              <!-- 上傳圖片 -->
              <div class="col-md-5 col-lg-4">
                <div class="mb-3">
                  <label class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片網址"
                    v-model="tempProduct.image"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >或 上傳圖片
                    <span v-show="fileUploading">
                      <i class="fa-solid fa-spinner fa-spin-pulse"></i>
                    </span>
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img
                  class="img-fluid rounded"
                  :src="tempProduct.image"
                  alt=""
                />
              </div>
              <!-- 商品資訊 -->
              <div class="col-md-7 col-lg-8">
                <div class="row">
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >品名 <span class="text-danger">*</span>
                      </label>
                      <Field
                        name="品名"
                        type="text"
                        class="form-control"
                        :class="{ 'is-invalid': errors['品名'] }"
                        placeholder="請輸入品名"
                        rules="required"
                        v-model="tempProduct.title"
                      />
                      <ErrorMessage name="品名" class="invalid-feedback" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">分類</label>
                      <select
                        class="form-select"
                        v-model="tempProduct.category"
                      >
                        <option value="" disabled>請選擇分類</option>
                        <option value="光學眼鏡">光學眼鏡</option>
                        <option value="太陽眼鏡">太陽眼鏡</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">框型</label>
                      <select
                        class="form-select"
                        v-model="tempProduct.description"
                      >
                        <option value="" disabled>請選擇框型</option>
                        <option value="圓框">圓框</option>
                        <option value="方型">方型</option>
                        <option value="波士頓">波士頓</option>
                        <option value="威靈頓">威靈頓</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">材質</label>
                      <select class="form-select" v-model="tempProduct.content">
                        <option value="" disabled>請選擇材質</option>
                        <option value="鈦合金">鈦合金</option>
                        <option value="輕量樹脂">輕量樹脂</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">原價</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="請輸入售價"
                        v-model="tempProduct.origin_price"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label class="form-label">售價</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="請輸入售價"
                        v-model="tempProduct.price"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault1"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault1"
                    >是否啟用</label
                  >
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault2"
                    v-model="tempProduct.unit"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault2"
                    >是否推薦</label
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- footer -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="submit" class="btn btn-sm btn-primary">確認</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import toggleModal from "@/js/mixins/toggleModal";
export default {
  props: ["product", "isNew"],
  emits: ["updateProduct"],
  mixins: [toggleModal],
  data() {
    return {
      tempProduct: {},
      fileUploading: false,
    };
  },
  methods: {
    // 把 tempProduct 傳給 Products.vue
    emitUpdateProduct() {
      this.$emit("updateProduct", this.tempProduct);
    },
    // 上傳圖片檔案
    uploadFile() {
      const uploadedFile = this.$refs.files.files[0];
      // 模擬表單送出形式
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
      //
      this.fileUploading = true;
      const api = "https://vue-course-api.hexschool.io/api/yunhsi/admin/upload";
      this.axios
        .post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }, // 將 formData 改為 form-data 格式，請求 api
        })
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.image = res.data.imageUrl;
            this.fileUploading = false;
            this.showSuccessMsg("上傳成功");
          } else {
            this.showErrorMsg(res.data.message.message);
            this.fileUploading = false;
          }
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: `${err}`,
          });
        });
    },
    // 成功訊息提示
    showSuccessMsg(msg) {
      this.$toast.add({
        severity: "success",
        summary: "訊息提示",
        detail: `${msg}`,
        life: 1000,
      });
    },
    // 失敗訊息提示
    showErrorMsg(msg) {
      this.$toast.add({
        severity: "error",
        summary: "訊息提示",
        detail: `${msg}`,
        life: 1000,
      });
    },
    // 關閉提示
    clear() {
      this.$toast.removeAllGroups();
    },
  },
  watch: {
    // 當收到 product 時，把它複製到 tempProduct 才能修改值
    product() {
      this.tempProduct = this.product;
    },
  },
};
</script>
<style lang="scss" scoped>
.form-switch {
  input,
  label {
    cursor: pointer;
  }
}
</style>
