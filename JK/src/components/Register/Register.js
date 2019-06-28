import React, { Component } from "react";
import Rheader from "../Rheader/Rheader";
import Rmain from "../Rmain/Rmain";
import "./Register.css";
export default class Register extends Component {
  render() {
    return (
      <div>
        <Rheader title='用户注册' />
        <Rmain />
      </div>
    );
  }
};
