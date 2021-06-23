
import styles from './sidebar.module.css';
/**
 * 
 * @param {Object} appState provided by React.createContext
 * 
 */
export const CartContents = ({state}) => {
    //computes list items with quantities and price
   
    function compute(){
        return state.cart.reduce((acc,item) => {
          
            if(!acc[item.sku]){
                acc[item.sku] = {...item,quantity:1,cost:item.price}
                console.log('acc',acc)
            }else{
                acc[item.sku]['quantity']++
                acc[item.sku]['cost'] += acc[item.sku]['price'];
            }
            return acc
        },{});
    }
    
    function renderContents(){  
        return state.cart.length ? 
    <ul className={styles.cartcontents}>
        {Object.values(compute(state)).map(v =><ContentDescriptor value={v}></ContentDescriptor>)}</ul>
  
        :<h3>Nothing in Cart</h3>
    }
    return renderContents()
    

}

const ContentDescriptor = ({value}) => {
    return (
        <li style={{width:"100%",display:'inline-flex',justifyContent:'space-between'}}><span>{value.name}{` x${value.quantity}`}</span><span>{`$${(value.cost/100).toFixed(2)}`}</span></li>
    )
}