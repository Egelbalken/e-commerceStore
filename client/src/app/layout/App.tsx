import { Container, CssBaseline, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import { Product } from '../models/product';
import Header from './Header';




function App() {
  const [products, setProducts] = useState<Product[]>([]);

  // Important to add the a dependency array to prevent endless loop.
  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])


  function addProduct(){
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 100,
        name: 'name', 
        price: 200,
        description: "Barfoot",
        pictureURL: "http://picsum.photos/200",
        type: 'Milk',
        brand: 'nike',
        quantityInStock: 100,
    }])
  }

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products}  addProduct={addProduct}/>
      </Container>
    </Fragment>
  );
}

export default App;
