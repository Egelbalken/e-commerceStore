import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { Product } from '../../models/product';

interface Props {
    product: Product;
}

const ProductCard = ({product}:Props) => {
  return (
    <Card>
        <CardHeader 
            avatar={
            <Avatar sx={{bgcolor:'secondary.main'}}>
                {product.name.charAt(0).toLocaleUpperCase()}
            </Avatar>}
            title={product.name}
            titleTypographyProps={{
                sx: {fontWeight: 'bold', 
                color: 'primary.main'}
            }}
        />
            
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
        image={product.pictureURL}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          {(product.price / 10).toFixed(2)}Kr
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard