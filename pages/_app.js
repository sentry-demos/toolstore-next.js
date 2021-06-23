import { useReducer } from 'react'
import '../styles/global.css'
import {AppContext} from '../contexts/appContext';



export default function App({ Component, pageProps }) {
  
    const initialState = {cart:[]};
    const reducer = (state,action) => {
        switch(action.type){
            case 'ADD':
                return {
                    cart:[...state.cart,action.payload]
                }
               
            case 'CLEAR':
                return {
                    cart:[]
                }
        }
    }
    let [state,dispatch] = useReducer(reducer,initialState);
   
    return <AppContext.Provider value={{state,dispatch}}><Component {...pageProps} /></AppContext.Provider>
}