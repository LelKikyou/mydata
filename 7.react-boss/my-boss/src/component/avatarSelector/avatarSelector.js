import React from "react"
import {Grid} from "antd-mobile"

let txImgList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(",").map((v) => {
    return {icon: require(`@/assets/AvatarSelectorImg/${v}.png`)}
})

class avatarSelector extends React.Component {
    render() {
        return <div>
            <Grid data={txImgList} columnNum={5} onClick={(el) => {
                this.props.selectAvatar(el)
            }}/>
        </div>
    }
}

export default avatarSelector
