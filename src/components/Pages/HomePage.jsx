import { product } from "../../data/products";

export default function HomePage() {
  return (
    <div className="page py-4">
      <div className="home-hero">
        <h1 className="welcome fw-bolder pt-4">Welcome to OyoweEnt!</h1>
        <p className="sub">Discover amazing products at great prices</p>
      </div>
      <div className="container-fluid ">
        <h2 className="page-title mx-md-5">Our Products</h2>
        <div
          className="product-list g-3 mx-md-5  pb-3 g-md-4  d-flex"
          style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
        >
          {product.map((product) => (
            <div
              className="card m-2 border-0 shadow-sm"
              style={{flex:"0 0 85%", scrollSnapAlign:"start"}}
              key={product.id}
            >
              <div className="card-body">
                <img
                  src={product.image}
                  className="img-fluid card-img-top "
                  style={{
                    objectFit: "cover",
                    height: "200px",
                  }}
                />
                <p>{product.name}</p>
                <h5>{product.price}</h5>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
