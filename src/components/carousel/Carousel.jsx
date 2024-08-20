import styles from "./carousel.module.css";
import ForwardArrowSVG from "../../assets/ForwardArrowSVG";
import { Link } from "react-router-dom";

import BackgroundOne from "../../assets/carousel_1.jpg";
import BackgroundTwo from "../../assets/carousel_2.jpg"
import BackgroundThree from "../../assets/carousel_3.jpg"

const Carousel = () => {
  return (
    <div
      className={styles.carousel}
      style={{ backgroundImage: `url(${BackgroundTwo})` }}
    >
      {/* <div
        className={styles.carousel_image_container}
        
      ></div> */}
      <div className={styles.forward_arrow}>
        <ForwardArrowSVG />
      </div>
      <div className={styles.back_arrow}>
        <ForwardArrowSVG />
      </div>
      <Link to="/store" className={styles.carousel_shop_button}>
        Store
      </Link>
      <div className={styles.carousel_position_container}>
        <div
          className={`${styles.image_selector} ${styles.image_selector_filled}`}
        ></div>
        <div className={styles.image_selector}></div>
        <div className={styles.image_selector}></div>
      </div>
    </div>
  );
};

export default Carousel;
