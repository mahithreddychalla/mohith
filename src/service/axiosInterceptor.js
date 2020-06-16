import axios from 'axios';

axios.interceptors.request.use((request)=>{
    let token=localStorage.getItem('token');
    // console.log(request)
    // console.log(token)
    request.headers['Authorization']='Bearer '+token;
    return request;
})

class AxiosInterceptor {
     
}

export default AxiosInterceptor;