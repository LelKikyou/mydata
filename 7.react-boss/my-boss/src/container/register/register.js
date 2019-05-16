import React from "react"
import Logo from "COM/logo"
import "./register.stylus"
import {WingBlank, WhiteSpace, List, InputItem, Button, Radio,Icon} from 'antd-mobile';
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {register} from "@/redux/user.redux"


@connect(
    state => state,
    {register}
)
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            user: "",
            pwd: "",
            repeatPwd: "",
            type: "BOSS"  //牛人
        };
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(type, v) {
        this.setState({
            [type]: v
        });
    }

    handleRegister() {
        this.props.register(this.state);
    }

    render() {
        const RadioItem = Radio.RadioItem;
        let redirectTo = this.props.user.redirectTo;
        return <div className="register">
            {redirectTo ? <Redirect to={redirectTo}></Redirect> : null}
            <div className="backBtn" onClick={()=>{
                this.props.history.push("/login");
            }}>
                <Icon className="backIcon" type="left" />
            </div>
            <div>{this.props.user.msg}</div>
            <Logo></Logo>
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                <List>
                    <InputItem onChange={(v) => {
                        this.handleChange("user", v)
                    }}>账号：</InputItem>
                    <InputItem onChange={(v) => {
                        this.handleChange("pwd", v)
                    }} type="password">密码：</InputItem>
                    <InputItem onChange={(v) => {
                        this.handleChange("repeatPwd", v)
                    }} type="password">确认密码：</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <RadioItem checked={this.state.type === "BOSS"}
                               onChange={() => this.handleChange("type", "BOSS")}>BOSS</RadioItem>
                    <RadioItem checked={this.state.type === "牛人"}
                               onChange={() => this.handleChange("type", "牛人")}>牛人</RadioItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <Button type="primary" onClick={this.handleRegister}>注册</Button>
            </WingBlank>
        </div>
    }
}

export default Register;
