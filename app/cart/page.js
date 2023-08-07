import Center from "../components/Center";
import Header from "../components/Header";
import orders from "@/data/cart.json";
import "@/styles/Cart.css";
function Cart() {
  var total = 0;
  orders.map((order) => {
    total += order.price;
  });
  var name, email, city, postCode, streetAddress, phoneNumber;
  return (
    <>
      <Header />
      <Center>
        <div className="cartWrapper">
          <div className="cartDiv">
            <table className="cartTable">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="orderInfo">
                      <div className="orderImg">
                        <img src={order.image} />
                      </div>
                      {order.title}
                    </td>
                    <td>
                      <button className="cartBtn">-</button>
                      <span className="qnty">1</span>
                      <button className="cartBtn">+</button>
                    </td>
                    <td>{order.price}$</td>
                  </tr>
                ))}
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td>{total}$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cartDiv checkoutDiv">
            <h2>Shipping Info</h2>
            <div className="checkoutCenter">
              <input type="text" placeholder="Name" value={name} name="name" />
              <input
                type="text"
                placeholder="Phone number"
                value={phoneNumber}
                name="phoneNUmber"
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
              />
              <div className="cartFlex">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                />
                <input
                  type="text"
                  placeholder="Street Address"
                  value={streetAddress}
                  name="streetAddress"
                />
              </div>
              <input
                type="text"
                placeholder="Post Code"
                value={postCode}
                name="postalCode"
              />
              <div className="checkoutBtnDiv">
                <button className="checkoutBtn">Continue payment</button>
              </div>
            </div>
          </div>
        </div>
      </Center>
    </>
  );
}

export default Cart;
