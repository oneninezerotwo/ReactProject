import React from 'react';
import { connect } from 'dva';
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import NavList from '../../components/NavList/NavList'
import Jktt from '../../components/Jktt/Jktt'
import Tabbar from '../../components/Tabbar/Tabbar'
class HomePage extends React.Component {
    render() {
        return (
            <div style={{
                height:'100%'
            }}>
                <Header/>
                <Carousel/>
                <NavList/>
                <Jktt/>
                <Tabbar tabs={0} />
            </div>
        )
    }
}

HomePage.propTypes = {
};

export default connect()(HomePage);
