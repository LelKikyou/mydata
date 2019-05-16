import React from "react"
import PropTypes from "prop-types";
import {TabBar} from "antd-mobile"
import {withRouter} from "react-router-dom"
@withRouter
class NavLinkBar extends React.Component {
    render() {
        const navList = this.props.data.filter(v => !v.hide);
        let pathname = this.props.location.pathname
        return <TabBar>
            {navList.map(v => {
                return <TabBar.Item
                    key={v.path}
                    title={v.text}
                    icon={{uri: require(`@/assets/navLinkBarImg/${v.icon}.png`)}}
                    selectedIcon={{uri: require(`@/assets/navLinkBarImg/${v.icon}-active.png`)}}
                    selected={pathname === v.path}
                    onPress={() => {
                        this.props.history.push(v.path)
                    }}
                >
                </TabBar.Item>
            })}
        </TabBar>
    }
}

NavLinkBar.propTypes = {
    data: PropTypes.array
}
export default NavLinkBar
