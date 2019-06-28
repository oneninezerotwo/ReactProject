import React, {Component} from 'react';
import Rheader from '../../components/Rheader/Rheader';
import Cbox from '../../components/Cbox/Cbox';
export default class Clause extends Component{
    render(){
        return (
            <div>
                <Rheader title='用户协议' />
                <Cbox />
            </div>
        )
    }
};