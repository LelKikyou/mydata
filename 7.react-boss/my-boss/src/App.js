import React from "react"
import {connect} from "react-redux"
import {addJgq, removeJgq, asyncAdd} from "./store/index"
// const mapStore = function (store) {
//     return {num: store}
// };
// const actionStore = {
//     addJgq, removeJgq, asyncAdd
// };
// App = connect(mapStore, actionStore)(App);
@connect(store => ({num: store}), {
    addJgq, removeJgq, asyncAdd
})
class App extends React.Component {
    render() {
        return <div>
            <h1>有{this.props.num}把枪</h1>
            <button onClick={this.props.addJgq}>加枪</button>
            <button onClick={this.props.removeJgq}>减枪</button>
            <button onClick={this.props.asyncAdd}>等会枪</button>
        </div>
    }
}

export default App