import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { Product } from '../../app/models/product'

// Single product not an array.
interface Props {
    products: Product,
}

export default function ProductCard({products}: Props) {
  return (
    <Fragment>
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {products.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={products.name}

                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}

                }}
            />
            <CardMedia
                sx={{height:140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
                image={products.pictureURL}
                title={products.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    {(products.price / 10).toFixed(2)}KR
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {products.brand} / {products.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    </Fragment>
  )
}

