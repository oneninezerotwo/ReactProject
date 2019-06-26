import React from 'react';
import { connect } from 'dva';

class HeadIinePage extends React.Component {
    render() {
        return (
            <div>
                头条
        </div>
        )
    }
}

HeadIinePage.propTypes = {
};

export default connect()(HeadIinePage);
