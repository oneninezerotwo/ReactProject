import React, { Component } from "react";
import './Rheader.css';
import '../../assets/JK-IconFont/iconfont.css';
import creatHistory from 'history/createHashHistory';  //返回上一页这段代码
const history = creatHistory();//返回上一页这段代码
export default class Rheader extends Component {
  state = {
    title: '用户注册'
  }
  goBackPage(){
      history.goBack();
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <header id="mallHeader" title='用户协议' >
          <div >
            <a
              rel="nofollow"
              className="back-btn  clearfix"
              
              onClick={
                  this.goBackPage
              }
            >
              <i className="iconfont icon-fanhui fl"  />
            </a>
            <span >{this.props ? this.props.title : this.state.title}</span>
            <div className="toggle-btn " >
              <a rel="nofollow" className="common-width clearfix" >
                <i className="iconfont icon-gengduo fr"  />
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
