import products from "@/data/products.json";

function CartContext() {
  return (
    <div>
      {products.map((item) => {
        return (
          <div>
            <p>{item.title + " " + item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CartContext;
