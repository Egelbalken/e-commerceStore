import { Grid, List } from '@mui/material'
import React, { Fragment } from 'react'
import { Product } from '../../app/models/product'
import ProductCard from './ProductCard'

interface Props {
    products: Product[],
}

export default function ProductList({products}: Props) {
  return (
    <Fragment>
        <Grid container spacing={3}>
        {products.map(product => (
            <Grid item xs={3} key={product.id}>
              <ProductCard product={product}/>
            </Grid>
          ))}
      </Grid>
    </Fragment>
  )
}
