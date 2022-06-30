import axios from "axios";

const payRequest = axios.create({
  baseURL: "https://vue-course-api.hexschool.io/api/yunhsi",
});

export const postPay = (data) => payRequest.post(`/pay/${data}`);
