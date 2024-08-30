import "./item.css";
import PropTypes from "prop-types";
import loading from "../../assets/loading.gif"


const Item = ({imageURL = loading, itemPrice = 0 , itemName = "Loading"}) => {
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
          {/* <div className="item-subtext">Subtext</div> */}
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
