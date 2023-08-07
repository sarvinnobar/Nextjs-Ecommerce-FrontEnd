import Header from "./Header";
import Offers from "./Offers";
import featured from "@/data/featured.json";
import Products from "./Products";
import products from "@/data/products.json";
export default function Index() {
  return (
    <>
      <Header />
      <Offers product={featured} />
      <Products products={products} />
    </>
  );
}
