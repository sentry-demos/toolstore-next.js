import * as Sentry from "@sentry/nextjs";
/**
 * 
 * @param {Object} orderData order data for POST request
 * @param {Array} orderData.cart array of items
 * @param {string} email 
 * @param {string} checkoutURL
 * 
 */
export async function purchaseItems(orderData,email,checkoutURL){
  
    try{
        let response = await fetch(checkoutURL,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "email": email
              },
              body: JSON.stringify(orderData)
        });
        if(!response.ok){
            console.log('response',response.ok)
            Sentry.captureException(new Error(response.status + " - " + (response.statusText || "INTERNAL SERVER ERROR")))
            return [false,true]
        }
        return [true,false]
    }
    catch(err){
        console.log('Error Purchasing',err);
        return [false,true]
    }
}