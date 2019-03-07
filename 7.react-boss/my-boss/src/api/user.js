import axiosHttp from "@/lib/axios"
export const userInfoApi = () => {
    return axiosHttp.axioseRquest({
        method: "get",
        url: '/user/info'
    })
};