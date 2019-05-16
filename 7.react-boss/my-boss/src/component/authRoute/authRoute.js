import React from "react"
import {withRouter} from "react-router-dom"
import {getInfo} from "@/redux/user.redux"
import {connect} from "react-redux"
@withRouter
@connect(
    state => state,
    {getInfo}
)
class AuthRoute extends React.Component {
    componentDidMount() {
        //当前是在登录页面的不请求
        const pathName = this.props.history.location.pathname;
        const pathList = ["/login", "/register"];
        if (pathList.indexOf(pathName) > -1) {
            return null
        }
        this.props.getInfo();
    }

    render() {
        return null
    }
}
export default AuthRoute
