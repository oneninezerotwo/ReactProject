import React from 'react';
import { connect } from 'dva';

class CartPage extends React.Component {
    render() {
        return (
            <div>
                购物车
        </div>
        )
    }
}

CartPage.propTypes = {
};

export default connect()(CartPage);
