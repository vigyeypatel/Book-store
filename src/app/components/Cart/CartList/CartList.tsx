import React from 'react';




export default function CartList(props :any) {
    let totalPrice:number=0;
    let totalQuantity:number=0;
    let tech_Disc : number = 50/100;
    let acad_Disc : number =20/100;
    let norm_Disc : number =10/100;
 
  return (
    <div>
            <h2>Cart</h2>
          <table>
                <thead>
                    <th>Books ID</th>
                    <th>Book's title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th></th>
                </thead>
            
                <tbody>

          {props.cart.map((book:any, index:any) =>
          
                    {

                          totalQuantity+=1;
                            let discount=0;
                            if(book.category=='Technical')
                                    {
                                        discount= book.price - tech_Disc * book.price;
                                    }
                            else if (book.category=='Academics')
                                    {
                                        discount= book.price -  acad_Disc * book.price;
                                    }
                            else    {
                                        discount= book.price - norm_Disc* book.price;
                                    }

                             totalPrice+=parseInt(book.price);
                                
                                
                            return(
                                        <tr>  
                                            <td>{book.id} </td>
                                            <td>{book.name}  </td>
                                            <td>{book.author}  </td>
                                            <td>{book.category} </td> 
                                            <td>1</td>
                                            <td>Rs.{discount} </td> 
                                            <td><button onClick={()=> props.actions.CartDeleteBook(index)} >Delete
                                            </button></td>
                                        </tr>
                                    )
                         }
                    )
                 }
          </tbody>
          <tfoot>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                    <th>{totalQuantity}</th>
                    <th>Rs.{totalPrice}</th>
                    <th></th>
          </tfoot>
          </table>
    </div>
  )
}
