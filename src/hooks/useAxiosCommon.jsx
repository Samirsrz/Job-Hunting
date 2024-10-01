import axios from "axios";


export const axiosCommon = axios.create({
    baseURL: import.meta.env.VITE_base_url,
  })
const useAxiosCommon = () => {
    return axiosCommon
};

export default useAxiosCommon;