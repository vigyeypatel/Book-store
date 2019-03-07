import React, { Component } from 'react'

interface AdminProps{
    actions:any
    customers:any
    history: any
}

export default class AdminOrders extends Component<AdminProps>{
  
    constructor(props:any){
        super(props);
        this.props.actions.UploadCustsApi();
    }


    render(){
    return (
    <div>
        <h2>AdminOrders</h2>
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Details</th>
                
            </thead>
            <tbody>
                {this.props.customers.map((customer :any)=> {
                    console.log(this.props.customers);
                       return( <tr>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td><button onClick={()=>{
                                   this.props.actions.DetailCust(customer);
                                    
                                   this.props.history.push('/orderdetails');
                            }}>View Details</button></td>
                           

                        </tr>
                       )
                } )}
                
            </tbody>
        </table>
      
    </div>
  )}
}
