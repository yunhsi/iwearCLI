import axios from "axios";

const productRequest = axios.create({
  baseURL: "https://vue-course-api.hexschool.io/api/yunhsi",
});

export const getProducts = (data) =>
  productRequest.get(`/products?page=${data}`);
export const getAllProducts = () => productRequest.get("/products/all");
export const getProduct = (data) => productRequest.get(`/product/${data}`);
