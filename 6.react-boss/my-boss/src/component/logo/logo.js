import React from "react"
import logoImg from "./job.png"
import "./logo.stylus"
class Logo extends React.Component {
    render() {
        return <img className="logo" alt="" src={logoImg}/>
    }
}

export default Logo;