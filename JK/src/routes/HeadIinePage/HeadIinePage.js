import React from 'react';
import { connect } from 'dva';
import Tabbar from '../../components/Tabbar/Tabbar'

class HeadIinePage extends React.Component {
    render() {
        return (
            <div>
                头条
                <Tabbar tabs={2} />
        </div>
        )
    }
}

HeadIinePage.propTypes = {
};

export default connect()(HeadIinePage);
