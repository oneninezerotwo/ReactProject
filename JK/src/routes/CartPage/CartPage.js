import React from 'react';
import { connect } from 'dva';
import Tabbar from '../../components/Tabbar/Tabbar'

class CartPage extends React.Component {
    render() {
        return (
            <div>
                购物车
                <Tabbar tabs={3} />
        </div>
        )
    }
}

CartPage.propTypes = {
};

export default connect()(CartPage);
