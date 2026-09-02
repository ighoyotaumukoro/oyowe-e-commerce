import { Link } from "react-router-dom";
import { product } from "../../data/products";
import { useCart } from "../../context/CartContext";
export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  return (
    <Link to={`/products/${product.id}`}>
      <div className="card border-0 shadow mx-3" style={{width:"20vh", height:"20vh"}}>
        
          <img
            src={product.image}
            className="img-fluid mx-auto"
            style={{
              objectFit: "",
              width: "80px",
              height: "80px",
            }}
          />
          <div className="product-details">
            <p className="product-name fw-bolder mt-2 mb-1 text-center">{product.name}</p>
            <div className="justify-content-evenly position-absolute end-0 start-0 d-flex">
              <h5
                className="product-price fw-bold"
                style={{ color: "rgb(7, 83, 247)" }}
              >
                ₦{product.price}
              </h5>
              <svg
              className=""
                onClick={() => addToCart(product.id)}
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.06133 5.63334L4.70037 3.46667H3.4047C3.21143 2.72134 2.5389 2.16667 1.73333 2.16667C0.7774 2.16667 0 2.94407 0 3.9C0 4.85594 0.7774 5.63334 1.73333 5.63334C2.5389 5.63334 3.21143 5.07867 3.40513 4.33334H3.96587L4.18253 5.63334H4.16607L6.40683 16.9069C5.33867 16.9884 4.44903 17.8109 4.34417 18.8457C4.28263 19.4545 4.48283 20.0642 4.89363 20.5175C5.30487 20.972 5.89073 21.2333 6.5 21.2333H7.36667C7.36667 22.6672 8.53277 23.8333 9.96667 23.8333C11.4006 23.8333 12.5667 22.6672 12.5667 21.2333H17.3333C17.3333 22.6672 18.4994 23.8333 19.9333 23.8333C21.3672 23.8333 22.5333 22.6672 22.5333 21.2333H24.2667C24.5063 21.2333 24.7 21.0396 24.7 20.8C24.7 20.5604 24.5063 20.3667 24.2667 20.3667H22.3817C22.0237 19.3583 21.063 18.6333 19.9333 18.6333C18.8036 18.6333 17.8429 19.3583 17.485 20.3667H12.415C12.0571 19.3583 11.0964 18.6333 9.96667 18.6333C8.83697 18.6333 7.87627 19.3583 7.51833 20.3667H6.5C6.13513 20.3667 5.78413 20.2098 5.53627 19.9364C5.28623 19.6595 5.1688 19.3033 5.2065 18.9328C5.27237 18.2789 5.87643 17.7671 6.58147 17.7671H6.92423C6.9303 17.7671 6.93507 17.7671 6.94113 17.7671H23.8385C25.0306 17.7667 26 16.7973 26 15.6056V5.63334H5.06133ZM1.73333 4.76667C1.25537 4.76667 0.866667 4.37797 0.866667 3.9C0.866667 3.42204 1.25537 3.03334 1.73333 3.03334C2.2113 3.03334 2.6 3.42204 2.6 3.9C2.6 4.37797 2.2113 4.76667 1.73333 4.76667Z"
                  fill="rgb(7, 83, 247)"
                />
              </svg>
            </div>
          </div>
        </div>
      
    </Link>
  );
}
