import { useState, useEffect } from "react";

import ProductList from "../components/product/ProductList";
import BasketList from "../components/basket/BasketList";
import Loading from "../components/loading/Loading";


const Home = () => {

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])


  const addOrder = item => {
    const index = orders.findIndex(el => el.id === item.id);

    if (index === -1) {
      const newOrder = {
        ...item,
        quantity: 1
      }
      setOrders([...orders, newOrder]);
    } else {
      const newOrder = orders.map((el, i) => {
        if (i === index) el.quantity++;
        setOrders(newOrder);
        return el;
      })
    }
  }

  const removeOrder = id => {
    const newOrders = orders.filter(el => el.id !== id);
    setOrders(newOrders);
  }

  const removeAllOrder = () => {
    setOrders([]);
  }

  const plusOrderQuantity = id => {
    const newOrders = orders.map(el => {
      if (el.id === id) el.quantity++;
      return el;
    })
    setOrders(newOrders);
  }

  const minusOrderQuantity = id => {
    const newOrders = orders.map(el => {
      if (el.id === id) el.quantity = el.quantity > 1 ? el.quantity - 1 : 1;
      return el;
    })
    setOrders(newOrders);
  }

  const basketHandler = () => {
    setBasketShow(!isBasketShow);
  }

  const total = orders.reduce((sum, el) => sum + el.quantity, 0);


  return (
    <div className=" container mx-auto">
      <div className=" p-8"></div>
      {loading && <Loading />}
      {isBasketShow && <BasketList orders={orders} removeOrder={removeOrder} removeAllOrder={removeAllOrder} plusOrderQuantity={plusOrderQuantity} minusOrderQuantity={minusOrderQuantity} />}
      <ProductList products={products} addOrder={addOrder} />
      <button className=" fixed bottom-10 right-10 bg-stone-900 text-white p-3" onClick={basketHandler}>SHOW BASKET {total}</button>
    </div>
  )
}

export default Home