import { product } from "../../data/products";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
export default function HomePage() {
  return (
    <div className="page py-4">
      <div className="home-hero">
        <h1 className="welcome fw-bolder pt-4">Welcome to Easylife Gadgethub!</h1>
        <p className="sub">Discover amazing products at great prices</p>
      </div>
      <div className="container-fluid ">
        <h2 className="fw-bold page-title mx-md-5">Our Products</h2>
        <div
          className="product-list g-3 mx-md-5  pb-3 g-md-4  d-flex"
          style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
        >
          {product.map((product) => (
            <ProductCard product={product}  key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
