import React from 'react';
import { connect } from 'dva';

class MinePage extends React.Component {
    render() {
        return (
            <div>
                我的
        </div>
        )
    }
}

MinePage.propTypes = {
};

export default connect()(MinePage);
