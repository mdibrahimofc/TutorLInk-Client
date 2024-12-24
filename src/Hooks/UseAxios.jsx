import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const axiosInstance = axios.create({
    baseURL: "https://b10a11-server-side-mdibrahimofc.vercel.app",
    withCredentials: true
})

const UseAxios = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        }, error=>{
            if(error.status === 401 || error.status === 403 ){
                logout()
                .then(()=>{
                    navigate("/signin")
                })
            }

            return Promise.reject(error)
        }
    )
    },[])
    
    return axiosInstance
}

export default UseAxios;