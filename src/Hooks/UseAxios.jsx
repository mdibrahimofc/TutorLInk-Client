import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const axiosInstance = axios.create({
  baseURL: "https://b10a11-server-side-mdibrahimofc.vercel.app",
  withCredentials: true,
});

// Uncomment and replace the baseURL for production
// const axiosInstance = axios.create({
//   baseURL: "https://b10a11-server-side-mdibrahimofc.vercel.app",
//   withCredentials: true,
// });

const UseAxios = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Interceptor for handling unauthorized responses
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response; // Return successful responses directly
      },
      (error) => {
        const status = error?.response?.status;
        if (status === 401 || status === 403) {
          // Perform logout on unauthorized access
          logout().then(() => {
            navigate("/signin");
          });
        }

        // Reject other errors
        return Promise.reject(error);
      }
    );

    // Cleanup interceptor on unmount
    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [logout, navigate]);

  return axiosInstance;
};

export default UseAxios;
