//This is here as an example of how page based routing could be configured.
//The code below is currently being used for the landing page in index.js




// import LayoutComponent from '../../components/Layout';
// import {fetchTools} from '../../lib/fetchTools';
// import {SideBar} from '../../components/SideBar';
// import {ProductTile} from '../../components/ProductTile';
// import styles from '../../components/layout.module.css';

// const email = Math.random().toString(36).substring(2, 6) + "@yahoo.com";
// export async function getServerSideProps(){

//     const toolsAPI = process.env.NEXT_PUBLIC_BACKEND
//     const productData = await fetchTools(email,toolsAPI);
 
//     return {
//         props:{
//             productData
//         }
//     }
   
// }
// export default function ProductList({productData}){
    
//     /**
//      * whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background.\
//      * In development mode (when you run npm run dev or yarn dev), every page is pre-rendered on each request — even for pages that use Static Generation. 
//      */
    
//     return <LayoutComponent>
        
//         <div className={styles.productlist}>
//         <h2 style={{display:"inline-flex",paddingLeft:"10px",alignItems:'center',margin:"0px",height:"74px",width:"100%",borderBottom:"1px solid lightgray",paddingBottom:"10px"}}>Online Hardware Store</h2>
//         {productData.map(tool => <ProductTile key={tool.id} data={tool}></ProductTile>)}
//         </div>
//         <SideBar email={email}></SideBar>
       
        
       
//         </LayoutComponent>
   
       

// }