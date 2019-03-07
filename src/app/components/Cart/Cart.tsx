import React from 'react';
import CartList from './CartList/CartList';
export default function Cart(props:any){
    return(
        <div>

            <CartList cart={props.cart} actions={props.actions}/>

            <button onClick={()=>props.history.push('/checkout')} >Proceed to Checkout</button>
        </div>
    )
}