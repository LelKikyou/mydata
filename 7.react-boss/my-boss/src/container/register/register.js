import React from "react"
import Logo from "COM/logo"
import "./register.stylus"
import {WingBlank, WhiteSpace, List, InputItem, Button, Radio} from 'antd-mobile';

class Register extends React.Component {
    state = {
        boss: {
            type: 0,
            data: ["BOSS", "牛人"]
        }
    };
    changeType(i) {
        this.setState({
            boss: Object.assign(this.state.boss, {type: i})
        });
    }
    render() {
        const RadioItem = Radio.RadioItem;
        let boss = this.state.boss;
        return <div className="register">
            <Logo></Logo>
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                <List>
                    <InputItem>账号：</InputItem>
                    <InputItem type="password">密码：</InputItem>
                    <InputItem type="password">确认密码：</InputItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    {this.state.boss.data.map((v, i) => {
                        return <RadioItem key={i} checked={boss.data[boss.type] === v} onChange={() => {
                            this.changeType(i)
                        }}>{v}</RadioItem>
                    })}
                </List>
                <WhiteSpace></WhiteSpace>
                <Button type="primary">注册</Button>
            </WingBlank>
        </div>
    }
}

export default Register;