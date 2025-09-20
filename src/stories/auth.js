import { defineStore } from 'pinia';

export const useAuthStore=defineStore('auth',{
    state:()=>{
        return  {isAuthenticated:true}
    },



    actions:{
        login(){
             const response = await axiosClient.post('/login', formData);
             localStorage.setItem('token', response.data.token);
        }
    }
})

