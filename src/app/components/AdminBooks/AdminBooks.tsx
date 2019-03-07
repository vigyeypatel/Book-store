import React,{Component} from 'react';




export default class AdminBooks extends Component<any>{
   
    constructor(props: any){
        super(props);
        this.props.actions.InitBooksApi();

      
    }

    
    render(){
        
        return(
            <main>
                <h2>Managing Books</h2>
            <button onClick={()=>{ this.props.actions.EditBookInit({},-1);
                                   this.props.history.push('/mb');
                                }}>Add New Book</button>

                          <table>
                            <thead>  
                                <tr>
                                  <th>Book's title</th>
                                  <th>Author</th>
                                  <th>Pages</th>
                                  <th>category</th>
                                  <th>Price(Rs.)</th>
                                  <th></th>
                                </tr>                
                              </thead>
                         <tbody>     
                                            
                    {this.props.books.map((book:any, index:number) =>{
                        return (
                            <>
                            <tr>
                                <td><strong>{book.name}</strong></td>
                                <td>{book.author}</td>                                       
                                <td>{book.pages}</td> 
                                <td>{book.category}</td>
                                <td>{book.price}</td> 
                                        
                                <td> <button onClick={()=>{
                                            this.props.actions.EditBookInit(book,index);
                                            this.props.history.push('/mb');
                                            }
                                        } className="edit-btn">Edit</button>
                                
                                
                                <button onClick={()=>{this.props.actions.DeleteBookApi(book.id,index);}
                                        }className="delete-btn">Delete</button></td>

                            </tr>
                        
                          </>
                                )
                            }
                        )
                    } 
                    </tbody>
                     </table>    
            </main>
    )}
}