import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-uwnu.onrender.com",
});
export { axiosInstance };
