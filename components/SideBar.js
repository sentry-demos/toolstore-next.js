import { useContext, useState } from "react";
import {AppContext} from '../contexts/appContext';
import {purchaseItems} from '../lib/purchaseItems';
import * as Sentry from "@sentry/nextjs";
import {CartContents} from './CartContents';
import styles from './sidebar.module.css'

export function SideBar({email}){
    const {state,dispatch} = useContext(AppContext);
    let [status,setStatus] = useState({errored:false,success:false});

    async function performCheckoutOnServer(){
        const checkoutURL = process.env.NEXT_PUBLIC_BACKEND + '/checkout';
        let transaction = Sentry.startTransaction({ name: "checkout" });
        Sentry.configureScope(scope => scope.setSpan(transaction));
        let [success,errored] = await purchaseItems({cart:state.cart},email,checkoutURL);
        setStatus({success,errored});
        const span = transaction.startChild({ 
            op: 'task',
            description: `processing shopping cart result`,
        });
      
        span.finish()
        transaction.finish();
    }
    function computeTotal(){
        return state.cart.reduce((acc,item) => {
            acc = acc + item.price;
            return acc
        },0)
    }
    function confirmationUI(responseState){
        const {success,errored} = responseState;
        if(!success & errored)return <span style={{color:'red'}}>Something went wrong!</span>;
        else if(success & !errored)return<h2>Purchase Successful</h2>;
        else return null
    }
    function clearCart(){
        dispatch({type:'CLEAR'});
        setStatus({errored:false,success:false});
    }
    return (
        <div className={styles.container}>
            <div className={styles.sidebarheader}><h3>Cart</h3></div>
            <div className={styles.contentslayout}>
            <CartContents state={state}></CartContents>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                {state.cart.length ? <><span>Total: </span><span>{`$${(computeTotal()/100).toFixed(2)}`}</span></>:null}
            </div>
            {confirmationUI(status)}
            <div style={{display:'flex',marginTop:'10px'}}>
                <button className={styles.checkoutBtn} onClick={() => performCheckoutOnServer()}>Checkout</button>
                <button onClick={() => clearCart()}>Clear Cart</button>
            </div>
           
            </div>
            
        </div>
    )
}