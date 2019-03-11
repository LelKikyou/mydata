import React from "react"
import {userInfoApi} from "@/api/user.api"
import {withRouter} from "react-router-dom"
@withRouter
class AuthRoute extends React.Component {
    componentDidMount() {
        //当前是在登录页面的不请求
        const pathName=this.props.history.location.pathname;
        const pathList=["/login","/register"];
        if(pathList.indexOf(pathName)>-1){
            return null
        }else {
            this.props.history.push("/login")
        }
        // userInfoApi().then((res) => {
        //     console.log(res)
        //     console.log(this.props.history)
        // })
    }

    render() {
        return null
    }
}

export default AuthRoute