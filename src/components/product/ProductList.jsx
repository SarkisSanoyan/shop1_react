import ProductItem from "./ProductItem"



const ProductList = ( {products, addOrder} ) => {
  return (
    <div className=" grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        products.map(product => <ProductItem 
        key ={product.id}
        item={product} 
        addOrder={addOrder} />)
      }
    </div>
  )
}

export default ProductList