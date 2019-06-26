import React from 'react';
import { connect } from 'dva';
import Tabbar from '../../components/Tabbar/Tabbar'
class HomePage extends React.Component {
    render() {
        return (
            <div>
                首页
                <Tabbar tabs={0} />
            </div>
        )
    }
}

HomePage.propTypes = {
};

export default connect()(HomePage);
