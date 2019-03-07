import {connect} from 'react-redux';
import Cart from '../Cart';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';


function mapStateToProps(state: any) {
    console.log("mapstatetorprops ", state);
    return {
        cart:state.br.cart
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const CartCont = connect(mapStateToProps,
    mapDispatchToProps) (Cart);

export default CartCont;

