import React from 'react'
import axios from 'axios';
import './NavList.css'
class NavList extends React.Component {
    state = {
        data: []
    }
    async componentDidMount() {
        let data = (await axios.get("https://fe-wcgi.jianke.com/v1/homepage?type=home&platform=mobile")).data[1].rooms
        // console.log(data)
        this.setState({
            data
        })
    }
    render() {
        return (
            <ul className="home-nav" style={{
                marginBottom: '0px'
            }}>
                {
                    this.state.data.map((item, index) => {
                        return (
                            <li key={index} style={{
                                width: '25%'
                            }}>
                                <img src={item.headImg} alt="" className="nav-icon" />
                                <span className="nav-txt" style={{
                                    color: ''
                                }}>{item.roomTitle}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default NavList