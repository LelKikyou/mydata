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
        data: user
    })
};
export const loginApi = (user) => {
    return axiosHttp.axioseRquest({
        method: "post",
        url: '/user/login',
        data: user
    })
};
export const userUpdateApi = (data) => {
    console.log(data)
    return axiosHttp.axioseRquest({
        method: "post",
        url: '/user/upData',
        data: data
    })
}
