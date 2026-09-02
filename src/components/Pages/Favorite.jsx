import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

export default function Favorite() {
  const { getWishlistItemsWithProducts } = useWishlist();
  const wishlistItems = getWishlistItemsWithProducts();

  console.log("wishlistItems:", wishlistItems);
  if (wishlistItems.length === 0) {
    return (
      <>
      <Link to="/" className="navbar-brand">
        <img
          src="/HJYG4683.PNG"
          className="m-2 nav-logo img-fluid position-absolute top-0 "
        />
      </Link>
      <div className="container text-center mt-5">
        <h1 className="mt-4 text-dark">Wishlist</h1>
        <p className="card card-body border-0 shadow-sm p-5 mt-5 fw-bold  text-dark">Your wishlist is empty☹</p>
      </div>
      </>
    );
  }
  return (
    <>
      <Link to="/" className="navbar-brand">
        <img
          src="/HJYG4683.PNG"
          className="m-2 nav-logo img-fluid position-absolute top-0 "
        />
      </Link>

      <div className="container">
        <h1 className="mt-4">
          Wishlist
          </h1>
          <div className="checkout-container p-3 bg-white rounded-2 mt-5">
            {wishlistItems.map((item) => (
              <div key={item.id} className="checkout-items d-flex">
                <img
                  src={item.product?.image}
                  className="rounded-3 mb-4 cart-image img-fluid"
                />
                <div className="checkout-item-details ms-4">
                  <h3 className="checkout-item-name">{item.product?.name}</h3>

                  <p className="checkout-item-price ">
                    ₦{item.product?.price} each
                    <span className="position-absolute end-0 me-4"></span>
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}
