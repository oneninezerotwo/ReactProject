import React from 'react';
import './Tabbar.css'
class Tabbar extends React.Component {
    render() {
        return (
            <div className="tab_bar">
                <a className="tab_bar_item active">
                    <i className="icon iconfont icon_tab_home_active"></i>
                    <p>首页</p>
                </a>
                <a className="tab_bar_item">
                    <i className="icon iconfont icon_tab_classNameify"></i>
                    <p>分类</p>
                </a>
                <a className="tab_bar_item">
                    <i className="icon iconfont icon_tab_jktt"></i>
                    <p>头条</p>
                </a>
                <a className="tab_bar_item">
                    <i className="icon iconfont icon_tab_cart"></i>
                    <p>购物车</p>
                </a>
                <a className="tab_bar_item">
                    <i className="icon iconfont icon_tab_mine"></i>
                    <p>我</p>
                </a>
            </div>
        )
    }
}

Tabbar.propTypes = {
};

export default Tabbar;
