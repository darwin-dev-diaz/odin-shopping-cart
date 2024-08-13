import "./item.css";
import PropTypes from "prop-types";

const Item = (props) => {
  return (
    <div className="item">
      <div className="item-image-container">
        <img className="item-image" src={props.imageURL} alt="item image" />
      </div>
      <div className="item-info-container">
        <div className="item-info-container-top">
          <div className="item-name">{props.itemName}</div>
        </div>
        <div className="item-info-container-bottom">
          <div className="item-subtext">Subtext</div>
          <div className="item-price">${props.itemPrice}</div>
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

Item.defaultProps = {
  imageURL:
    "https://res.cloudinary.com/dr2ufkyd4/image/fetch/w_300,h_300,f_webp,q_auto/https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410",
  itemName: "Default shirt",
  itemPrice: 70,
};
export default Item;
