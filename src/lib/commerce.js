import Commerce from "@chec/commerce.js";
export const commerce = new Commerce(process.env.REACT_APP_PUBLIC_KEY,true);
// tạo môi trường cung cấp api giống như back end