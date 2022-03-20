import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';
//initial state
const initalState = {
    transactions: [],
}

//creating context 
export const GlobalContext = createContext(initalState); 

//provider component 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    //actions
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}