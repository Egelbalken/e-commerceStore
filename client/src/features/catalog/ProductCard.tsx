import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia,Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Product } from '../../app/models/product'

// Single product not an array.
interface Props {
    product: Product,
}

export default function ProductCard({product}: Props) {
  return (
    <Fragment>
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}

                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}

                }}
            />
            <CardMedia
                sx={{height:140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
                image={product.pictureURL}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    {(product.price / 10).toFixed(2)}KR
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button to={`/catalog/${product.id}`} component={Link} size="small">View</Button>
            </CardActions>
        </Card>
    </Fragment>
  )
}

