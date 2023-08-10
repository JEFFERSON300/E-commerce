import { useEffect, useState } from 'react';
import { ServiceAPI } from '../../services/Products.service';

export const ProductsPage = () => {
    const [products, setProducts] = useState("");

    useEffect(()=> {
      (async () =>{
          const res = await ServiceAPI.GetpProducts();
          setProducts(res);
          // console.log(products.products)
      })();
    },[])
    
    const handleClick = () => {console.log(products.products[0])};

    return (
        <>
            <p>ProductsPage Render</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}