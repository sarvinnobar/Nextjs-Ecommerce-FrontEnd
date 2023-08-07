import "@/styles/Products.css";
import Center from "./Center";
import ProductBox from "./ProductBox";

function Products({ products }) {
  return (
    <Center>
      <h2 className="productsh2">New Products</h2>
      <div className="productsDiv">
        {products.length > 0 &&
          products.map((product) => {
            return <ProductBox {...product} />;
          })}
      </div>
    </Center>
  );
}

export default Products;
