import { Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../app/models/product';



const ProductDetails = () => {
    const {id} = useParams<{id:string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      axios.get(`http://localhost:5000/api/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, [id])

    if (loading) return <h3>Loading...</h3>

    if (!loading) return <h3>Product not found</h3>

  return (
    <Typography>
    </Typography>
  )
}

export default ProductDetails

function setState(): [any, any] {
    throw new Error('Function not implemented.');
}
