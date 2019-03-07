import * as actionTypes from "./types";
import * as api from "../api";


///Books Action Creators

export const AddBook = (book:any, index:any) =>{
    return{
        type:actionTypes.ADD_BOOK,
        payload:{
            book,
            index
        }
    }
}

export const DeleteBook = (index:any) =>{
    return{
        type:actionTypes.DELETE_BOOK,
        payload:{
            index
        }
    }
}


export const CartAddBook = (book:any) =>{
    return{
        type:actionTypes.CART_ADD_BOOK,
        payload:{
            book
        }
    }
}

export const CartDeleteBook = (index:any) =>{
    return{
        type:actionTypes.CART_DELETE_BOOK,
        payload:{
            index
        }
    }
}
export const HandleValue= (name:any, value:any) =>{
    return{
        type: actionTypes.HANDLE_VALUE,
        payload:{
            [name]:value
        }
    }
}

export const EditBookInit= (book:any, index:number) =>{
    return{
        type:actionTypes.EDIT_BOOK_INIT,
        payload:{
            book,
            index
        }
    }
}

export const InitBooks= (books:any[])=>{
    return{
        type:actionTypes.INIT_BOOKS,
        payload:{
            books
        }
    }
}

export const InitBooksApi = () => {
    return (dispatch:any)=>{
        return api.fetchBooks().then((a:any[])=>{
            dispatch(InitBooks(a))
        })
    }
}


export const AddBookApi = (book:any,id:any,index:any) => {
        return (dispatch:any)=>{
            if(index==-1){
                console.log('add');
                return api.addBook(book).then((a:any[])=>{
                    dispatch(AddBook(a,index));
                })
            }
            else{
                console.log('update');
                return api.updateBook(book,id).then((a:any[])=>{
                    dispatch(AddBook(a,index));
                })
            }
        }

    
}


export const DeleteBookApi = (id:number,index:number) => {
    return (dispatch:any)=>{
        return api.deleteBook(id).then((a:any[])=>{
            console.log(a);
            dispatch(DeleteBook(index));
        })
    }
}

/////////////////////////////////////////////////////////////////////
///////////////Customers  Actions Creators//////////////////////////////////
///////////////////////////////////////////////////////

export const AddCustApi = (customer:any) => {
    return (dispatch:any)=>{
            console.log('add cust');
            return api.addCust(customer).then((cust:any)=>{//"lucky" a local variable
                console.log(cust);
                dispatch(AddCust(cust));
            })
        }
    }


    export const AddCust = (customer:any) =>{
        return{
            type:actionTypes.ADD_CUSTOMER,
            payload:{
                customer
            }
        }
    }

    export const HandleValueDetail = (name:string, value: string):any =>{
        return{
            type:actionTypes.HANDLE_VALUE_DETAIL,
            payload:{
                [name]:value
            }
        }
    }

    export const uploadCusts= (customers:any[])=>{
        return{
            type:actionTypes.UPLOAD_CUSTS,
            payload:{
                customers
            }
        }
    }
    
export const UploadCustsApi = () => {
        return (dispatch:any)=>{
            return api.fetchCustomers().then((cust:any[])=>{
                dispatch(uploadCusts(cust))
            })
        }
    }//initial initialization of customers from api

export const DetailCust= (customer:any) =>{
        return{
            type:actionTypes.DETAIL_CUST,
            payload:{
                customer
            }
        }
    }//init cust when detailed view of order is opened from admin order
    