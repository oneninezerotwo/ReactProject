import React from 'react'
import axios from 'axios'
import { connect } from 'dva'
// import { Link } from 'dva/router'
import './CnavBox.css'
import '../Cbox/Cbox.css'
class CnavBox extends React.Component {
    state = {
        // boxList: [],
        NavList: [],
        indexPut: 0
    }
    async componentDidMount() {
        let data = (await axios.get("https://wcgi.jianke.com/category/api/fullCategories?platform=1")).data
        // let data2 = (await axios.get('https://wcgi.jianke.com/category/api/fullCategories?pid=191&platform=1')).data
        console.log(data)
        this.setState({
            NavList: data,
            // boxList: data2
        })
        // this.toNavBack()
    }
    // componentDidUpdate(){
    //     console.log(this.state.indexPut)
        // let indexPut = this.props.example.indexPut
        // let indexPut = this.state.indexPut;
        // console.log(this.state.NavList[indexPut].id);
        // this.state.NavList.forEach((item,index) => {

            // indexPut = index
            // console.log(item)
        // });
    // }
    toNavBack(index) {
        let data = this.state.NavList
        let Index = index
        // console.log(data)
        this.setState({
            indexPut: index
        })
        this.props.dispatch({
            type: "example/save",
            payload: {
                NavList: data,
                indexPut: Index
            }
        })
        this.state.indexPut = index
        // console.log(this.state.indexPut, index)
    }
    render() {
        return (
                <nav className="classify-nav-box">
                    <ul className="nav-list">
                        {
                            this.state.NavList.map((item, index) => (
                                <li onClick={
                                    this.toNavBack.bind(this, index)
                                } key={index} className={this.state.indexPut === index ? "current" : ""}>{item.categoryName}
                                </li>
                            ))
                        }

                    </ul>
                </nav>
        )
    }
}

export default connect((state) => {
    return state
})(CnavBox)