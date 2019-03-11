import axiosHttp from "@/lib/axios"
export const userInfoApi = () => {
    return axiosHttp.axioseRquest({
        method: "get",
        url: '/user/info'
    })
};
export const registerApi = (user) => {
    return axiosHttp.axioseRquest({
        method: "post",
        url: '/user/register',
        data:user
    })
};