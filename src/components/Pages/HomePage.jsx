import { product } from "../../data/products";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ProductCard from "./ProductCard";
export default function HomePage() {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); 
  return (
    <div className="page py-4">
      <div className="home-hero">
        <h2 className="welcome fw-bolder pt-4">
          Welcome to Easylife Gadgethub!
        </h2>
        <p className="sub">Discover amazing products at great prices</p>
      </div>
      <div className="container-fluid ">
        <p className="d-flex justify-content-center">
          <i className="bi bi-cart"></i>
          <span className="mx-2">Cart</span>
          <label className="bg-danger text-white" style={{width:"20px", height:"20px", textAlign:"center", justifyItems:"center", borderRadius:"10px"}}>{totalItems}</label>
        </p>
        <h2 className="fw-bold page-title mx-md-5">Our Products</h2>
        <div
          className="product-list g-3 mx-md-5  pb-3 g-md-4  d-flex"
          style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
        >
          {product.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
