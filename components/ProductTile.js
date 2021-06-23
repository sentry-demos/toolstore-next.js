import { useContext } from 'react';
import {AppContext} from '../contexts/appContext';
import ImageComponent from './Image';
import styles from './producttile.module.css';
/**
 * 
 * @param {Object} data Product data
 * @param {string} data.sku Product sku
 * @param {string} data.name Product name
 * @param {string} data.image Product image
 * @param {string} data.id Product id
 * @param {string} data.price Product price
 * @param {string} data.type Product price
 */
export function ProductTile({data}){
    let {_,dispatch} = useContext(AppContext);
    const {image,price} = data;
    function addToCart(){
       
        const action = {type:'ADD',payload:data}
        dispatch(action);
    }

    return <div className={styles.product}>
        <ImageComponent src={`/images/${image}`} height="200" width={"200"} alt={"Image of a tool"}></ImageComponent>
        <div className={styles.productbutton}><span className={styles.modifiedspan}>{`$${(price/100).toFixed(2)}`}</span><button className={styles.modifiedbutton} onClick={() => addToCart()}>Buy!</button></div>
    </div>
}