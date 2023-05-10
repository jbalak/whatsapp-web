import axios from "axios";

axios = axios.create({
  baseURL: "https://dd-chat-0.onrender.com/api",
});

export default axios;
