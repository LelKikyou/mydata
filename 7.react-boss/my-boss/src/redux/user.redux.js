import {registerApi} from "@/api/user.api"
import {getRedirectPath,md5Imooc} from "@/lib/util"

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const ERROR_MSG = "ERROR_MSG";
const initState = {
    isAuth: false,
    msg: "",
    user: "",
    pwd: "",
    type: "",
    redirectTo: ""
};

export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, msg: "", redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
        case ERROR_MSG   :
            return {...state, isAuth: false, msg: action.msg};
        default:
            return state
    }
}

function errorMsg(msg) {
    return {type: ERROR_MSG, msg: msg}
}

function registerSuccess(data) {
    return {
        type: REGISTER_SUCCESS,
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
                dispatch(registerSuccess({user, pwd, type}))
            } else {
                dispatch(errorMsg(res.mes))
            }
        })
    }
}

// 同步
// export function register(data) {
//     return registerSuccess(data)
// }