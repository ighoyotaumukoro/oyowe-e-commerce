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
    <div
      className="card m-2 border-0 shadow-sm "
      style={{ flex: "0 0 85%", scrollSnapAlign: "start" }}
    >
      <img
        src={product.image}
        className="img-fluid card-img-top"
        style={{
          objectFit: "cover",
          height: "200px",
        }}
      />
      <div className="product-details p-3">
        <p className="fw-bolder mt-3 mb-1">{product.name}</p>
        <h5 className="fw-bold" style={{ color: "rgb(7, 83, 247)" }}>
          ₦{product.price}
        </h5>
        <p className="text-muted fw-semibold"></p>
        <div className="justify-content-between d-flex">
          <Link to={`/products/${product.id}`}>
            <button className="btn border-0 btn-secondary btn-sm">
              View details
            </button>
          </Link>
          <button
            className="border-0 btn btn-sm fw-semibold btn-primary"
            style={{}}
            onClick={() => addToCart(product.id)}
          >
            Add to cart{productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
