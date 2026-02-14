import axios from 'axios'

const user=JSON.parse(localStorage.getItem('todo-app'));

//default auth header
if (user?.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
}

//Create Todo
const createtodo=(data)=>{
    return axios.post('/todo/create',data)
}
//get all todo
const getalltodo=(id)=>{
    return axios.get(`/todo/getAll/${id}`)
}

//update all todo
const updatetodo=(id,data)=>{
    return axios.patch(`/todo/update/${id}`,data)
}

//Delete Todo
const deletetodo=(id)=>{
    return axios.delete(`/todo/delete/${id}`)
}
const Todoservices={createtodo,getalltodo,updatetodo,deletetodo}

export default Todoservices;