import React from 'react'
import '../../assets/JK-IconFont/iconfont.css'
import './Header.css'
class Header extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <div className="background" style={{
                    opacity: 0.75
                }}>
                </div>
                <div className="info">
                    <div className="info-logo">
                        <i className="icon iconfont ">健客</i>
                    </div>
                    <div className="info-bar">
                        <i className="icon iconfont icon-sousuo-m"></i>
                        <input type="text" placeholder="搜索" />
                    </div>
                    <div className="info-login">
                        <span>登录</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header