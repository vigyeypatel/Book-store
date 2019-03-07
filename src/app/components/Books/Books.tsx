import React from 'react';
export default function Books(props:any){
    let discount;
    let discountedPrice;
    return(
        <main>

            <h2>Library</h2>


                 <button onClick={props.actions.InitBooksApi}>
                                                               Click To Explore Books </button>
                <section>                   
                    {props.books.map((book:any, index:any) =>{

                        if(book.category == 'Technical')
                               { discount = "50% Discount";
                                  discountedPrice = book.price - 50/100 * book.price;  } 
                        else if(book.category == 'Academics')
                               { 
                                discount = "20% Discount";
                                discountedPrice =  book.price - 20/100 * book.price;
                                }
                           else  {
                                discount = "10% Discount";
                                discountedPrice = book.price - 10/100 * book.price;}         

                                return (
                                <div className="single-book"> 
                                <div>   
                                <ul> 
                                <li className="dis_info">{discount}</li>
                                <li><strong> Book Title :</strong><span> {book.name}</span> </li>
                                 <li><strong>Author :</strong><span> {book.author}</span>  </li>
                                 <li><strong>Category :</strong><span> {book.category}</span>  </li>
                                 <li><strong>Pages :</strong> <span >{book.pages} </span>  </li> 
                                 <li><strong>Price :</strong><span className="cost"><strong>Rs.{discountedPrice}</strong></span><span className="dis_p"> {book.price}</span>   </li> 
                                 <li><strong>Book ID :</strong><span> {book.id}</span> </li>
                                </ul>
                                </div>
                                <div>
                                <button onClick={()=>{
                                    props.actions.CartAddBook(book);
                                }}
                                >Add to Cart</button>
                                    </div>
                                  </div>
                                )
                            }
                            
                        )
                    }
                    </section>
                    <button onClick={()=>props.history.push('/cart')}>Proceed to Cart</button>
        </main>
    )
}