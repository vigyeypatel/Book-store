//form to edit or add book
import React from 'react';


export default function Checkout(props:any) {
        
        return(
            <>

                    <h2>Buyer Details</h2>
                    
                    <form>
                                
                    
                             <label htmlFor="name">Full Name</label>
                            <input id="name" name="name" type="text"  required value={props.customerDet.name} onChange= { (e) => props.actions.HandleValueDetail(e.target.name,e.target.value)} />
                            
                        
                            <label htmlFor="address">Address</label>
                            <input id="address" name="address" type="text"  required value={props.customerDet.address} onChange= { (e) => props.actions.HandleValueDetail(e.target.name,e.target.value)} />
                           
                        
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" name="phone" type="text" value={props.customerDet.phone} pattern="[0-9]+" required onChange= { (e) => props.actions.HandleValueDetail(e.target.name,e.target.value)}/>
                            
                            <button type="submit" onClick={(e)=> {
                                                e.preventDefault();
                                                let customer={
                                                    ...props.customerDet,
                                                    cart:props.cart
                                                }
                                                props.actions.AddCustApi(customer);
                                                props.history.push('/orderdetails');}}>Checkout </button>
                                
                    </form>
                    
        </>
        );
}