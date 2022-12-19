import {Button } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react"
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);

    // Important to add the a dependency array to prevent endless loop.
    useEffect(() => {
      fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])

    return (
    <Fragment>
     <ProductList products={products}/>
    </Fragment>
    )
}