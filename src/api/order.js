import axios from "axios";

const orderRequest = axios.create({
  baseURL: "https://vue-course-api.hexschool.io/api/yunhsi",
});

export const postOrder = (data) => orderRequest.post(`/order`, { data });
export const getOrders = (data) => orderRequest.get(`/orders?page=${data}`);
export const getOrder = (data) => orderRequest.get(`/order/${data}`);
