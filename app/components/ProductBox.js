import CartIcon from "@/icons/CartIcon";
import "@/styles/ProductBox.css";
import Link from "next/link";
function ProductBox({ id, title, description, price, image }) {
  const url = "/product/" + id;
  function tirp() {
    console.log("shod");
  }
  return (
    <div className="boxDiv">
      <Link href={url} className="boxWrapperLink">
        <div className="boxImgDiv">
          <img src={image} />
        </div>
      </Link>
      <div className="boxInfo">
        <Link href={url} className="boxTitle">
          {title}
        </Link>
        <div className="boxPriceRow">
          <div className="boxPrice">${price}</div>
          <div className="btnLinkDiv">
            <button className="btnBox">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
