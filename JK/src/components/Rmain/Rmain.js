import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Rmain.css';
import {withRouter} from 'react-router';
export default withRouter (class Rmain extends Component{
    check(){
        var user = document.querySelector('.inputStyle').value;
        if(!(/^1[3456789]\d{9}$/.test(user))){ 
            var msg = document.querySelector('.hint');
            msg.style.display = 'block';
            var advice = document.querySelector('.suggest');
            advice.innerText = '您的手机格式有误，请重新输入'; 
            return false; 
        }else{
            localStorage.phone = user;
            var tel = localStorage.phone;
            this.props.history.push('/login');
        } 
    }
    render(){
        return (
            <div>
                <div  className="register-box">
                    <section  className="page">
                        <div  className="tel-item">
                            <input  type="tel" placeholder="请输入您的手机号" maxlength="11" className="inputStyle" />
                        </div>
                        <div  className="register-bar">
                            <button  className="register-btn" onClick={
                                this.check.bind(this)
                            }>注册</button>
                        </div>
                        <div  className="notice">注册即视您同意
                            <Link  to="/clause" className="">《健客服务条款》</Link>
                        </div>
                        <div className='hint' >
                            <span className='suggest'></span>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
});