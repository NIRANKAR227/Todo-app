import axios from 'axios'

const registeruser=(data)=>{
    return axios.post("/user/register",data);
}

const loginuser=(data)=>{
    return axios.post("/user/login",data);
}

const AuthServices={registeruser,loginuser}

export default AuthServices