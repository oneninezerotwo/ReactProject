import React from 'react';
import {Link} from 'dva/router'
import './Tabbar.css'
import '../../assets/JK-IconFont/iconfont.css'
class Tabbar extends React.Component {
    state = {
        tabs: [
            {
                title: "首页",
                url: "/home",
                icon: "icon iconfont icon-shouye"
            },
            {
                title: "分类",
                url: "/classify",
                icon: "icon iconfont icon-fenlei"
            },
            {
                title: "头条",
                url: "/headIine",
                icon: "icon iconfont icon-fengongsixinwen"
            },
            {
                title: "购物车",
                url: "/cart",
                icon: "icon iconfont icon-gouwuche"
            },
            {
                title: "我",
                url: "/mine",
                icon: "icon iconfont icon-wode1"
            }
        ],
        indexput:0
    }
    goback(index){
        this.state.indexput = index
        console.log(this.state.indexput,index)
    }
    render() {
        return (
            <div className="tab_bar">
                {
                    this.state.tabs.map((item, index) => {
                        return (
                            <Link to={{
                                pathname:item.url
                            }} onClick={
                                this.goback.bind(this,index)
                            } key={index} className={this.props.tabs===index?"tab_bar_item active":"tab_bar_item"}>
                                <i className={item.icon}></i>
                                <p>{item.title}</p>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

Tabbar.propTypes = {
};

export default Tabbar;
