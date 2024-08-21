import "./item.css";
import PropTypes from "prop-types";
import loading from "../../assets/loading.gif"


const test = "https://res.cloudinary.com/dr2ufkyd4/image/fetch/w_300,h_300,f_webp,q_auto/https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410"
const Item = ({imageURL = null, itemPrice = 70 , itemName = "Default Shirt"}) => {
  return (
    <div className="item">
      <div className="item-image-container">
        <img className="item-image" src={imageURL} alt="item image" />
      </div>
      <div className="item-info-container">
        <div className="item-info-container-top">
          <div className="item-name">{itemName}</div>
        </div>
        <div className="item-info-container-bottom">
          <div className="item-subtext">Subtext</div>
          <div className="item-price">${itemPrice}</div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  imageURL: PropTypes.string,
  itemName: PropTypes.string,
  itemPrice: PropTypes.number,
};


export default Item;
