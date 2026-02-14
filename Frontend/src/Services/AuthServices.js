import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Register User
const registeruser = (data) => {
  return API.post("/user/register", data);
};

// Login User
const loginuser = (data) => {
  return API.post("/user/login", data);
};

const AuthServices = {
  registeruser,
  loginuser,
};

export default AuthServices;
