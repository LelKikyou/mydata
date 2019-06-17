import React from "react"
import Logo from "COM/logo"
import "./login.stylus"
import {WingBlank, WhiteSpace, List, InputItem, Button} from 'antd-mobile';
import {connect} from "react-redux"
import {login} from "@/redux/user.redux"
import {Redirect} from "react-router-dom";
@connect(
    state => state,
    {login}
)
class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: "",
            pwd: ""
        };
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }

    register() {
        this.props.history.push("/register")
    }

    login() {
        this.props.login(this.state);
    }

    handleChange(type, v) {
        this.setState({
            [type]: v
        })
    }

    render() {
        let redirectTo = this.props.user.redirectTo;
        return (<div className="login">
                {redirectTo ? <Redirect to={redirectTo}></Redirect> : null}
                <div>{this.props.user.msg}</div>
                <Logo></Logo>
                <WingBlank>
                    <WhiteSpace></WhiteSpace>
                    <List>
                        <InputItem onChange={(v) => {
                            this.handleChange("user", v)
                        }}>账号：</InputItem>
                        <InputItem type="password" onChange={(v) => {
                            this.handleChange("pwd", v)
                        }}>密码：</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.login}>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )

    }
}

export default Login;
