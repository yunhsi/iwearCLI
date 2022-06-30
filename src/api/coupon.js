import axios from "axios";

const couponRequest = axios.create({
  baseURL: "https://vue-course-api.hexschool.io/api/yunhsi",
});

export const postCoupon = (data) => couponRequest.post(`/coupon`, { data });
