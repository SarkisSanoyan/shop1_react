import BasketItem from "./BasketItem"



const BasketList = ( {orders, removeOrder, removeAllOrder, plusOrderQuantity, minusOrderQuantity} ) => {

  const total = orders.reduce((sum, el) => sum + el.quantity * el.price, 0);

  return (
    <div className=" fixed top-10 right-10 p-7 bg-red-500 ">
      {
        orders.map(order => <BasketItem 
          key={order.id}
          item={order}
          removeOrder={removeOrder}
          removeAllOrder={removeAllOrder}
          plusOrderQuantity={plusOrderQuantity} 
          minusOrderQuantity={minusOrderQuantity}/>)
      }
      <div className=" flex gap-3 p-4"> 
        Total: {total}
        <button className=" bg-stone-900 g-2 text-white" onClick={removeAllOrder}>Delete</button>
      </div>
    </div>
  )
}

export default BasketList