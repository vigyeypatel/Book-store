import {connect} from 'react-redux';
import AdminOrders from '../AdminOrders';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';


function mapStateToProps(state: any) {
    console.log("mapstatetorprops ", state);
    return {
        customers : state.cr.customers,
        customersDet : state.cr.customersDet,
        cart : state.br.cart
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


const BookCont = connect(mapStateToProps,
    mapDispatchToProps) (AdminOrders);

export default BookCont;

