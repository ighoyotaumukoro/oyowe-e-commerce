import { Link } from "react-router-dom";
import { product } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

    const { addToWishlist, wishlistItems } = useWishlist();
  const productInWishlist = wishlistItems.find((item) => item.id === product.id);
  const productLabel = productInWishlist
    ? `(${productInWishlist.quantity})`
    : "";

  return (
    
      <div
        className="card border-0 shadow mx-3"
        style={{ width: "20vh", height: "20vh" }}
      >
        <div className="justify-content-end">
          <span></span>
        </div>
        <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          className="img-fluid ms-4 pt-3"
          style={{
            objectFit: "",
            width: "80px",
            height: "80px",
          }}
        />
        </Link>
        <div className="product-details">
          <p className="product-name fw-bolder mt-2 mb-1 text-center">
            {product.name}
          </p>
          <div className="justify-content-evenly position-absolute end-0 start-0 d-flex">
            <h5
              className="product-price fw-bold"
              style={{ color: "rgb(7, 83, 247)" }}
            >
              ₦{product.price}
            </h5>
            <svg
              onClick={() => {addToCart(product.id); alert("Added to cart")}}
              width="20"
              height="20"
              viewBox="0 0 32 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.22933 4.16L5.78507 1.56H4.1904C3.95253 0.6656 3.1248 0 2.13333 0C0.9568 0 0 0.93288 0 2.08C0 3.22712 0.9568 4.16 2.13333 4.16C3.1248 4.16 3.95253 3.4944 4.19093 2.6H4.88107L5.14773 4.16H5.12747L7.88533 17.6883C6.57067 17.7861 5.47573 18.773 5.34667 20.0148C5.27093 20.7454 5.51733 21.477 6.02293 22.021C6.52907 22.5664 7.25013 22.88 8 22.88H9.06667C9.06667 24.6007 10.5019 26 12.2667 26C14.0315 26 15.4667 24.6007 15.4667 22.88H21.3333C21.3333 24.6007 22.7685 26 24.5333 26C26.2981 26 27.7333 24.6007 27.7333 22.88H29.8667C30.1616 22.88 30.4 22.6476 30.4 22.36C30.4 22.0724 30.1616 21.84 29.8667 21.84H27.5467C27.1061 20.63 25.9237 19.76 24.5333 19.76C23.1429 19.76 21.9605 20.63 21.52 21.84H15.28C14.8395 20.63 13.6571 19.76 12.2667 19.76C10.8763 19.76 9.69387 20.63 9.25333 21.84H8C7.55093 21.84 7.11893 21.6518 6.81387 21.3236C6.50613 20.9914 6.3616 20.5639 6.408 20.1193C6.48907 19.3346 7.23253 18.7205 8.10027 18.7205H8.52213C8.5296 18.7205 8.53547 18.7205 8.54293 18.7205H29.3397C30.8069 18.72 32 17.5568 32 16.1268V4.16H6.22933ZM2.13333 3.12C1.54507 3.12 1.06667 2.65356 1.06667 2.08C1.06667 1.50644 1.54507 1.04 2.13333 1.04C2.7216 1.04 3.2 1.50644 3.2 2.08C3.2 2.65356 2.7216 3.12 2.13333 3.12ZM24.5333 20.8C25.7099 20.8 26.6667 21.7329 26.6667 22.88C26.6667 24.0271 25.7099 24.96 24.5333 24.96C23.3568 24.96 22.4 24.0271 22.4 22.88C22.4 21.7329 23.3568 20.8 24.5333 20.8ZM12.2667 20.8C13.4432 20.8 14.4 21.7329 14.4 22.88C14.4 24.0271 13.4432 24.96 12.2667 24.96C11.0901 24.96 10.1333 24.0271 10.1333 22.88C10.1333 21.7329 11.0901 20.8 12.2667 20.8ZM30.9333 16.1268C30.9333 16.9832 30.2187 17.68 29.3403 17.68H8.9712L6.4272 5.2H30.9333V16.1268Z"
                fill="black"
              />
            </svg>
            
            <svg
            onClick={() => {addToWishlist(product.id); alert("Added to wishlist")}}
              className="favorite mb-3"
              width="22"
              height="22"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_216)">
                <path
                  d="M23.375 4.25C20.91 4.25 18.5442 5.3975 17 7.21083C15.4559 5.3975 13.09 4.25 10.625 4.25C6.26171 4.25 2.83337 7.67833 2.83337 12.0417C2.83337 17.3967 7.65004 21.76 14.9459 28.39L17 30.2458L19.0542 28.3758C26.35 21.76 31.1667 17.3967 31.1667 12.0417C31.1667 7.67833 27.7384 4.25 23.375 4.25ZM17.1417 26.2792L17 26.4208L16.8584 26.2792C10.115 20.1733 5.66671 16.1358 5.66671 12.0417C5.66671 9.20833 7.79171 7.08333 10.625 7.08333C12.8067 7.08333 14.9317 8.48583 15.6825 10.4267H18.3317C19.0684 8.48583 21.1934 7.08333 23.375 7.08333C26.2084 7.08333 28.3334 9.20833 28.3334 12.0417C28.3334 16.1358 23.885 20.1733 17.1417 26.2792Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_216">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
            
          </div>
        </div>
      </div>
  
  );
}
