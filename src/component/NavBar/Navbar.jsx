
import { AppBar, Typography } from '@mui/material'
import { ShoppingCart } from '@material-ui/icons'
import { Badge, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import useStyles from './styles'
function Navbar({totalItem}) {
    const classes = useStyles();
  return (
    <AppBar className={classes.appBar} color='inherit'>
        <Toolbar className={classes.toolBar}>
            {/* phan ben trai  */}
            <Typography variant='body1' className={classes.title}>
                <img className={classes.image} height='25px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_NATO.svg/800px-Flag_of_NATO.svg.png'></img>
                BetterShopping
            </Typography>
            {/* phan khoang trong o giua */}
            <div className={classes.grow}></div>
            <div>
                <IconButton aria-label='Show cart items' color='inherit'>
                    <Badge badgeContent={totalItem} color='secondary'>
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar