import React from 'react'
import './Cheader.css'
class Cheader extends React.Component {
    state={
        isshowHeader:false
    }
    onshowHeader(){
        this.setState({
            isshowHeader:!this.state.isshowHeader
        })
    }
    render() {
        return (
            <header id="mallHeader" className="class-head">
                <div className="hcon">
                    <a rel="nofollow" className="back-btn common-header-btn">
                        <i className="icon iconfont icon-fanhui"></i>
                    </a>
                    <span>全部分类</span>
                    <div onClick={
                        this.onshowHeader.bind(this)
                    } className="toggle-btn common-header-btn">
                        <a rel="nofollow" className="common-width">
                            <i className={this.state.isshowHeader?"icon iconfont icon-guanbi":"icon iconfont icon-gengduo"}></i>
                        </a>
                    </div>
                </div>
                <nav style={{
                    display: this.state.isshowHeader?'block':'none'
                }}>
                    <ul>
                        <li className="arrows-tag"></li>
                        <li>
                            <a href="/" rel="nofollow">
                                <i className="icon iconfont icon-shouye"></i>
                                <em>首页</em>
                            </a>
                        </li>
                        <li>
                            <a href="/classNameify/classNameifyList" className="router-link-exact-active router-link-active" rel="nofollow">
                                <i className="icon iconfont icon-fenlei"></i>
                                <em>分类搜索</em>
                            </a>
                        </li>
                        <li>
                            <a href="/cart" className="" rel="nofollow">
                                <i className="icon iconfont icon-gouwuche1"></i>
                                <em>购物车</em>
                            </a>
                        </li>
                        <li>
                            <a href="/user" className="" rel="nofollow">
                                <i className="icon iconfont icon-wode"></i>
                                <em>个人中心</em>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Cheader