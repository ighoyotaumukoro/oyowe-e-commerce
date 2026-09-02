import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { getCartItemsWithProducts } = useCart();
  const cartItems = getCartItemsWithProducts();
  return (
    <>
      <Link to="/" className="navbar-brand">
        <img
          src="/HJYG4683.PNG"
          className="m-2 nav-logo img-fluid position-absolute top-0 "
        />
        
      </Link>
      <div className="">
        <div className="container">
          <h1 className="mt-4">
            CheckOut
            <div className="checkout-container">
              <div className="checkout-items p-3 bg-white rounded-2 mt-5">
                <h2 className="mb-4"> Order Summary</h2>
                {cartItems.map((item) => (
                  <div className="checkout-items d-flex">
                    <img
                      src={item.product.image}
                      className="rounded-3 mb-4 cart-image img-fluid"
                    />
                    <div className="checkout-item-details ms-4">
                      <h3 className="checkout-item-name">
                        {item.product.name}
                      </h3>

                      <p className="checkout-item-price ">
                        ₦{item.product.price} each
                        <span className="position-absolute end-0 me-4"></span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}
