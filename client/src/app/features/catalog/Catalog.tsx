import { Fragment, useEffect, useState } from 'react'
import { Product } from '../../models/product';
import ProductList from './ProductList';


const Catalog = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    },[])
  

  return (
    <Fragment>  
      <ProductList products={products}/>
    </Fragment>
  )
}

export default Catalog