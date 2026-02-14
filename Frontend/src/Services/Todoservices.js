import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Attach token dynamically before every request
API.interceptors.request.use((req) => {
  const stored = JSON.parse(localStorage.getItem("todo-app"));

  if (stored?.token) {
    req.headers.Authorization = `Bearer ${stored.token}`;
  }

  return req;
});

// Create Todo
const createtodo = (data) => {
  return API.post("/todo/create", data);
};

// Get All Todos
const getalltodo = (id) => {
  return API.get(`/todo/getAll/${id}`);
};

// Update Todo
const updatetodo = (id, data) => {
  return API.patch(`/todo/update/${id}`, data);
};

// Delete Todo
const deletetodo = (id) => {
  return API.delete(`/todo/delete/${id}`);
};

const Todoservices = {
  createtodo,
  getalltodo,
  updatetodo,
  deletetodo,
};

export default Todoservices;
