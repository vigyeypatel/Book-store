import * as actionTypes from "../actions/types";
import { stateTypeCust, CustomerDet } from "../model/Book";



const initialState:stateTypeCust= {
    customers: [],
    customerDet: {} as CustomerDet,
    
    customer: {
        name: '',
        address: '',
        phone: 0 ,
        id: 0,
        cart: []
    },
}

export default function custReducer(state:stateTypeCust = initialState, action:any ): stateTypeCust{
    switch (action.type){
        
        case actionTypes.ADD_CUSTOMER:{
            return {...state, customers: [...state.customers, action.payload.customer ], customer: action.payload.customer }
        }
        
        
        case actionTypes.HANDLE_VALUE_DETAIL:{
            return {
                ...state, customerDet:{...state.customerDet, ...action.payload}
             }
        }


        case actionTypes.UPLOAD_CUSTS:{//initializing customers array state containing all customers
            return {...state, customers: action.payload.customers}
        }

        case actionTypes.DETAIL_CUST:{//initializing customer state with present customer to be edited or added
            return {...state, customer: action.payload.customer}
        }
        
        default:
        return state;
    }
}