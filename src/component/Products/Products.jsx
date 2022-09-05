import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Product from './Product/Product';
import useStyles from './styles';
// fake api
const products = [
    {
        id: 1, 
        name: 'MacBook Pro',
        price: 123,
        descript: "This latest MacBook Pro...",
        image:'https://macstores.vn/wp-content/uploads/2017/03/New-MacBook-Pro-banner_B-1277x500.jpg'
    },
    {   id: 2, 
        name: 'AirPods Pro',
        price: 323, 
        descript: "This latest AirPods Pro...",
        image: 'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/AnhNQ/02/Mo-ta-san-pham-tai-nghe-khong-day-apple-airpods-pro-1.JPG'
    },
    {   id: 3, 
        name: 'AirPods Pro',
        price: 323, 
        descript: "This latest AirPods Pro...",
        image: 'https://c8n8e4j6.rocketcdn.me/wp-content/uploads/2021/09/iPhone13-iPhone13-Mini-10.jpg'
    },
    {   id: 4, 
        name: 'AirPods Pro',
        price: 323, 
        descript: "This latest AirPods Pro...",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAnWz-DVGYl_xW8xSr4yA3-FrcFnMpG9KIg&usqp=CAU'
    },
    {   id: 5, 
        name: 'AirPods Pro',
        price: 3333333, 
        descript: "This latest AirPods Pro...",
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/aobhuua/2021_09_06/mercedes_benz_concept_eqg_1.jpg'
    },
    {   id: 6, 
        name: 'Mescedes benz',
        price: 1222222, 
        descript: "This latest AirPods Pro...",
        image: 'https://vcdn-vnexpress.vnecdn.net/2021/09/30/2022-mercedes-benz-eqs-launch-2788-9838-1632973624.jpg'
    }
]



function Products({products,cartHandle}) {
    const classes = useStyles();
  return (
    <main className={classes.content}>
        {/* tao khoang cach bang phan navbar */}
         <div className={classes.toolbar}/> 
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} cartHandle={cartHandle}/>
                </Grid>
            ))
            }
        </Grid>
    </main>
  )
}

export default Products;
