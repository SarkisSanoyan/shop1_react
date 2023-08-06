


const BasketItem = ({ item, removeOrder, plusOrderQuantity, minusOrderQuantity }) => {


  return (
    <div className=" flex items-center gap-2">
      <h2>Title: {item.title}</h2>
      <button className=" fas fa-minus" onClick={()=> minusOrderQuantity(item.id)}></button>
      <span>{item.quantity}</span>
      <button className=" fas fa-plus" onClick={()=> plusOrderQuantity(item.id)}></button>
      =
      <span>{item.quantity * item.price}</span>
      <button className=" fas fa-remove" onClick={()=> removeOrder(item.id)}></button>
    </div>
  )
  
}

export default BasketItem
