import React, {Component} from 'react';
import Rheader from "../Rheader/Rheader";
import Lmain from '../Lmain/Lmain';
export default class Login extends Component{
    render(){
        return (
            <div>
                <Rheader title='用户登录'/>
                <Lmain />
            </div>
        )
    }
};