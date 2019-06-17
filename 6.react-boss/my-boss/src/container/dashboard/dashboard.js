import React ,{Fragment }from "react"
import {connect} from "react-redux"
import {NavBar} from "antd-mobile"
import Boss from "CON/dashboard/boss"
import Genius from "CON/dashboard/genius"
import User from "CON/dashboard/user"
import Msg from "CON/dashboard/msg"
import NavLinkBar from "COM/navLinkBar"
import "./dashboard.stylus"
@connect(
    state => state
)
class Dashboard extends React.Component {
    render() {
        console.log(this)
        let pathName=this.props.location.pathname;
        const user = this.props.user;
        const navList = [
            {
                path: "/boss",
                text: "牛人",
                icon: "boss",
                title: "牛人列表",
                component: Boss,
                hide: user.type === "牛人"
            },
            {
                path: "/genius",
                text: "boss",
                icon: "job",
                title: "boss列表",
                component: Genius,
                hide: user.type === "BOSS"
            },
            {
                path: "/msg",
                text: "消息",
                icon: "msg",
                title: "消息列表",
                component: Msg
            },
            {
                path: "/me",
                text: "我",
                icon: "user",
                title: "个人中心",
                component: User
            }
        ]
        return <Fragment>
            <NavBar mode='dard'>{navList.find((v)=>v.path===pathName).title}</NavBar>
            <div className={"content"}>

            </div>
            <div className={"navLinkBar"}>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        </Fragment>
    }
}

export default Dashboard
