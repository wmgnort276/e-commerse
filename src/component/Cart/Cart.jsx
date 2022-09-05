import { Grid, Typography } from '@mui/material';
import React from 'react'

const Cart = ({cart}) => {
    const Empty_cart = () => {
        <Typography>Your cart is Empty!</Typography>
    }
    const FilledCart = () => {
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => {
                    <Grid key={item.id} item sm={12}>
                        {item.name}
                    </Grid>
                })}
            </Grid>
        
        </>
    }
    if(!cart.line_items) return <div>Loading....</div>;
  return (
    <div>
        {!cart.line_items.length ? <Empty_cart/> : <FilledCart/>}
    </div>
  )
}

export default Cart