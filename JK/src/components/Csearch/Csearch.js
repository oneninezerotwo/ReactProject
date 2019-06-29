import React from 'react'
import './Csearch.css'
class Csearch extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="class-search-box">
                    <div className="search-content">
                        <i className="icon iconfont icon-sousuo-m"></i>
                        <input type="text" placeholder="金戈21片直降50元" />
                    </div>
                    <div className="search-btn">搜索</div>
                </div>
            </div>
        )
    }
}

export default Csearch