import React from 'react';
import { connect } from 'dva';
import Cheader from '../../components/Cheader/Cheader'
import Csearch from '../../components/Csearch/Csearch'
import CnavBox from '../../components/CnavBox/CnavBox'
import ClassifyBox from '../../components/ClassifyBox/ClassifyBox'
import Tabbar from '../../components/Tabbar/Tabbar'

class ClassifyPage extends React.Component {
    render() {
        return (
            <div style={{
                height: '100%'
            }}>
                <Cheader />
                <Csearch />
                <CnavBox />
                <ClassifyBox />
                <Tabbar tabs={1} />
        </div>
        )
    }
}

ClassifyPage.propTypes = {
};

export default connect()(ClassifyPage);
