


const ProductItem = ( {item, addOrder} ) => {
  return (
    <div className=" flex items-center flex-col m-3 p-3 shadow-lg">
      <img src={item.src} alt={item.title} />
      <p>Id: {item.id}</p>
      <h2>Product title: {item.title}</h2>
      <p>Product price: {item.price}</p>
      <button className=" bg-stone-900 text-white p-2" onClick={()=> addOrder(item)}>ADD TO CART</button>
    </div>
  )
}

export default ProductItem