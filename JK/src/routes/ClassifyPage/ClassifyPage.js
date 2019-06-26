import React from 'react';
import { connect } from 'dva';

class ClassifyPage extends React.Component {
    render() {
        return (
            <div>
                分类
        </div>
        )
    }
}

ClassifyPage.propTypes = {
};

export default connect()(ClassifyPage);
