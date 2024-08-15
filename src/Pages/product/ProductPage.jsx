import "./productpage.css";
const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="product-page-left">
        <div className="product-images-container">
          <div className="product-image">
            <img
              src="https://res.cloudinary.com/dr2ufkyd4/image/fetch/w_300,h_300,f_webp,q_auto/https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410"
              alt="product image"
            />
          </div>
        </div>
      </div>
      <div className="product-page-right">
        <h2 className="product-name">Item Name</h2>
        <div className="price-container">
          <span className="price">$4.00</span>
          <span className="old-price">$2.30</span>
        </div>
        <hr />
        <div className="product-description-container">
          <p className="product-description-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit
            vitae voluptatibus. Consequuntur sequi assumenda vitae tempore
            aperiam, voluptates, fugit e.
          </p>
          <p className="product-technical-details-container">COLOR: Red</p>
        </div>
        <form noValidate="">
          <label htmlFor="product-quantity" className=" product-quantity-label">
            Quantity:
            <input
              type="number"
              className="product-quantity-input"
              name="product-quantity"
              id="product-quantity"
              max="14"
              min="1"
              value="1"
            />
          </label>
          <button className="product-cart-btn" type="submit">
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
