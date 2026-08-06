import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, product } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";
  useEffect(() => {
    console.log("ID from URL:", id);
    const foundProduct = getProductById(id);
    console.log("Found:", foundProduct);
    if (!foundProduct) {
      navigate("/");
      return;
    }

    

    setProduct(foundProduct);
    console.log("product found:", foundProduct);
  }, [id, navigate]);
  if (!product) {
    return <h1>Loading...</h1>;
  }
  

  
  return (
    <div className="page rounded-3">
      <div className="container-fluid">
        <div
          className="product-detail mt-5 bg-white py-3 ps-4 rounded-2"
          style={{ display: "flex", gap: "30px" }}
        >
          <div className="product-detail-image">
            <img
              src={product.image}
              className="product-image rounded-2"
              alt="product-name"
              style={{ width: "200px", height: "210px", objectFit: "cover" }}
            />
          </div>
          <div className="product-detail-content" style={{}}>
            <h3 className="product-name fw-bolder">{product.name}</h3>
            <p className="product-price mb-0 text-primary fw-bold mb-2">
              ₦{product.price}
            </p>
            <p className="product-des mt-0">{product.description}</p>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Add to cart{productQuantityLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
