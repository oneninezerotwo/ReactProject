import React from 'react';
import { connect } from 'dva';
import Tabbar from '../../components/Tabbar/Tabbar'

class MinePage extends React.Component {
    render() {
        return (
            <div>
                我的
                <Tabbar tabs={4} />
        </div>
        )
    }
}

MinePage.propTypes = {
};

export default connect()(MinePage);
