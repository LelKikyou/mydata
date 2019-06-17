import React from "react"
import {NavBar, InputItem, TextareaItem, List, Button, WhiteSpace, WingBlank} from "antd-mobile"
import AvatarSelector from "COM/avatarSelector"
import {update} from "@/redux/user.redux"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom";

@connect(
    state => state,
    {update}
)
class Geniusinfo extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            desc: "",
            avatar: ""//头像
        }
    }

    onChange(k, v) {
        this.setState({
            [k]: v
        })
    }

    render() {
        let redirectTo = this.props.user.redirectTo;
        //当前是Geniusinfo页面不跳转
        return <div>
            {(redirectTo && redirectTo !== this.props.location.pathname) ? <Redirect to={redirectTo}></Redirect> : null}
            <NavBar mode="dark">牛人完善信息页面</NavBar>
            <List renderHeader={() => {
                return this.state.avatar ? (
                    <div>你选择的头像是:<img src={this.state.avatar} alt={"头像"} width={20}/></div>) : <div>请选择头像</div>
            }}>
                <AvatarSelector selectAvatar={(el) => {
                    this.setState({
                        avatar: el.icon
                    })
                }}/>
                <WhiteSpace/>
                <InputItem
                    clear
                    onChange={(v) => {
                        this.onChange("title", v)
                    }}
                >求职职位</InputItem>
                <TextareaItem
                    value={this.state.desc}
                    title="个人简历"
                    onChange={(v) => {
                        this.onChange("desc", v)
                    }}
                    autoHeight
                />
            </List>
            <WhiteSpace size={'lg'}/>
            <WingBlank>
                <Button type="primary" onClick={() => {
                    this.props.update(this.state)
                }}>保存</Button>
            </WingBlank>
        </div>
    }
}
export default Geniusinfo;
