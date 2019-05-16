import {registerApi, loginApi, userInfoApi,userUpdateApi} from "@/api/user.api"
import {getRedirectPath, md5Imooc} from "@/lib/util"

const ANTH_SUCCESS = "ANTH_SUCCESS";//人员信息 成功
const ERROR_MSG = "ERROR_MSG";
const LOAD_DATA = "LOAD_DATA";
const initState = {
    msg: "",
    user: "",
    type: "",
    redirectTo: ""
};

export function user(state = initState, action) {
    switch (action.type) {
        case ANTH_SUCCESS:
            return {...state, msg: "", redirectTo: getRedirectPath(action.payload), ...action.payload};
        case ERROR_MSG   :
            return {...state, msg: action.msg};
        case LOAD_DATA:
            return {...state, ...action.payload};
        default:
            return state
    }
}

function errorMsg(msg) {
    return {type: ERROR_MSG, msg: msg || "服务器错误！"}
}

function anthSuccess(data) {
    return {type: ANTH_SUCCESS, payload: data}
}

function getInfoSuccess(data) {
    return {
        type: LOAD_DATA,
        payload: data
    }
}

//异步
export function register({user, pwd, repeatPwd, type}) {
    if (!user || !pwd) {
        return errorMsg("用户密码必须输入");
    }
    if (pwd !== repeatPwd) {
        return errorMsg("密码和确认密码不同");
    }
    return dispatch => {
        registerApi({user, pwd: md5Imooc(pwd), type}).then(res => {
            console.log(res)
            if (res.code === 0) {
                dispatch(anthSuccess({user, type}))
            } else {
                dispatch(errorMsg(res.msg))
            }
        }).catch(err => {
            dispatch(errorMsg(err))
        })
    }
}

export function login({user, pwd}) {
    return dispatch => {
        loginApi({user, pwd: md5Imooc(pwd)}).then(res => {
            console.log(res)
            if (res.code === 0) {
                dispatch(anthSuccess(res.data))
            } else {
                dispatch(errorMsg(res.msg))
            }
        }).catch(err => {
            dispatch(errorMsg(err))
        })
    }
}

//获取用户信息
export function getInfo() {
    return dispatch => {
        userInfoApi().then((res) => {
            if (res.code === 0) {
                console.log(res.data)
                dispatch(getInfoSuccess(res.data))
            } else {
                this.history.push("/login");
                dispatch(errorMsg(res.msg))
            }
        }).catch(err => {
            dispatch(errorMsg(err))
        })
    }
}

//更新信息
export function update(data) {
    return dispatch => {
        userUpdateApi(data).then((res) => {
            if (res.code === 0) {
                dispatch(anthSuccess(res.data))
            } else {
                dispatch(errorMsg(res.msg))
            }
        }).catch(err => {
            dispatch(errorMsg(err))
        })
    }
}

// 同步
// export function register(data) {
//     return registerSuccess(data)
// }
