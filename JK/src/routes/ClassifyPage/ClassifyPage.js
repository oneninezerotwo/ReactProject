import React from 'react';
import { connect } from 'dva';
import Tabbar from '../../components/Tabbar/Tabbar'

class ClassifyPage extends React.Component {
    render() {
        return (
            <div>
                分类
                <Tabbar tabs={1} />
        </div>
        )
    }
}

ClassifyPage.propTypes = {
};

export default connect()(ClassifyPage);
