import React from "react"
import {Grid} from "antd-mobile"
import PropTypes from "prop-types";

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
avatarSelector.propTypes ={
    selectAvatar: PropTypes.func
}
export default avatarSelector
