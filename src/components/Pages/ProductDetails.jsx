import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, product } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();

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

  const productInCart = cartItems.find((item) => item.id === product.id);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <div className="page">
      <div className="container-fluid p-0">
  
          <img
            src={product.image}
            className="img-fluid product-image w-100 d-block"
            alt="product-name"
            style={{height:"50vh"}}
          />
        
        <div className="card card-body pb-5 product-detail-content mx-1" style={{marginTop:"-5vh", borderRadius:"20px 20px 0px 0px"}}>
          <h3 className="h3 product-name fw-bolder">{product.name}</h3>
          <p className="product-price mb-0 text-primary fw-bold mb-2 h4">
          <span className="fw-semibold text-dark"> Price: </span>₦{product.price}
          </p>
          <p className="mb-1 fw-semibold">Description</p>
          <p className="product-des mt-0">{product.description}</p>
          <button
            className="mt-5 btn btn-sm btn-primary"
            onClick={() => {
              addToCart(product.id);
              alert("Added to cart");
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
