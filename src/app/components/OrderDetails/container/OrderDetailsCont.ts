import {connect} from 'react-redux';
import OrderDetails from '../OrderDetails';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';


function mapStateToProps(state: any) {
    console.log("mapstatetorprops ", state);
    return {
        cart:state.br.cart,
        customerDet:state.cr.customerDet,
        customer: state.cr.customer
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


const OrderDetailsCont = connect(mapStateToProps,
    mapDispatchToProps) (OrderDetails);

export default OrderDetailsCont;

