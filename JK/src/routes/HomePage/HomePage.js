import React from 'react';
import { connect } from 'dva';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                首页
        </div>
        )
    }
}

HomePage.propTypes = {
};

export default connect()(HomePage);
