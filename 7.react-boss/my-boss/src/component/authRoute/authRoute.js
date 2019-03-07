import React from "react"
import {userInfoApi} from "@/api/user"
class AuthRoute extends React.Component {
    componentDidMount() {
        console.log(111)
        userInfoApi().then((res)=>{
            console.log(res)
        })
    }

    render() {
        return null
    }
}

export default AuthRoute