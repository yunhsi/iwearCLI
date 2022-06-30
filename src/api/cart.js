import axios from "axios";

const cartRequest = axios.create({
  baseURL: "https://vue-course-api.hexschool.io/api/yunhsi",
});

export const postCart = (data) => cartRequest.post(`/cart`, { data });
export const deleteCart = (data) => cartRequest.delete(`/cart/${data}`);
export const getCarts = () => cartRequest.get(`/cart`);
