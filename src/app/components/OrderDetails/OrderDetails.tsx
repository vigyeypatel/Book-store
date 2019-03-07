import React from 'react'
import CartList from '../Cart/CartList/CartList'

export default function OrderDetails(props:any) {
  return (
    <main>
            <h2>Placed Order Details</h2>

        <section>
            <ul>
                <li><strong>Order ID:</strong> {props.customer.id}</li>
                <li><strong>Name: </strong>{props.customer.name}</li>
                <li><strong>Address: </strong>{props.customer.address}</li>
                <li><strong>Phone: </strong>{props.customer.phone}</li>
            </ul>
        </section>
        <CartList cart={props.cart} actions={props.actions}/>

       
    </main>
  )
}
