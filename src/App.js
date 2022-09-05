import React, {useState,useEffect, Fragment} from 'react';
import {Products, Navbar} from './component'
import Cart from './component/Cart/Cart';
import { commerce }  from './lib/commerce'

function App() {  
    const [products, setProducts]= useState([]);
    // commerce js có phương thức tự động thêm sản phẩm chọn mua vào giỏ hàng
    // cart khởi tạo ở dưới là một mảng chứa sản phẩm(trong đó có id, tên,...)
    const [cart,setCart] = useState({});
    // get data from commerce.js
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
    }
    // lấy dữ liệu từ cart, ban đầu chưa đặt hàng sẽ là null
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    }

    
    const handleAddToCart = async (productID,quantity) => {
      // item.cart la mot cart moi voi san pham da duoc them vao
      const item = await commerce.cart.add(productID,quantity);
      setCart(item.cart);
    }

    useEffect(() => {
      fetchProducts();
      fetchCart();
    },[])

    console.log(cart);
    
    return (    
      <>
        {/* // lay tong so san pham trong cart */}

          <Navbar totalItem={cart.total_items}/> 
          {/* <Products products={products} cartHandle={handleAddToCart}/> */}
          <Cart  cart={cart}/>
      </>
    )
}

export default App
