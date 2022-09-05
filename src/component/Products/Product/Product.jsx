import { AddShoppingCart } from '@material-ui/icons';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';
function Product({product,cartHandle}) {
    const classes = useStyles();
  return (
    <>
     <Card className= {classes.root}>
         <CardMedia 
            className={classes.media}
            image={product.image.url} // co the cho truc tiep anh vao day
         />

         <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                   {product.name}
                </Typography>
                <Typography variant='h5'>
                   {product.price.raw + 'vnd'}
                </Typography>
            </div>
            {/* chú ý phần bên dưới giúp tạo dòng miêu tả sản phẩm đúng */}
            <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color='secondary'/>
             
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to card' onClick={() => cartHandle(product.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
         </CardContent>


     </Card>
    </>
  );
}

export default Product;
