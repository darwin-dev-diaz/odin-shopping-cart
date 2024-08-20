import styles from "./carousel.module.css";
import ForwardArrowSVG from "../../assets/ForwardArrowSVG";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import BackgroundOne from "../../assets/carousel_1.jpg";
import BackgroundTwo from "../../assets/carousel_2.jpg";
import BackgroundThree from "../../assets/carousel_3.jpg";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const backgroundArray = [BackgroundOne, BackgroundTwo, BackgroundThree];
  const changeCarouselIndex = (direction = 1) => {
    if (direction > 0 && carouselIndex === 2) {
      setCarouselIndex(0);
    } else if (direction < 0 && carouselIndex === 0) {
      setCarouselIndex(2);
    } else {
      setCarouselIndex(carouselIndex + direction);
    }
  };
  useEffect(() => {


    const carouselImagePostions = document.querySelectorAll(
      "." + styles.image_selector
    );
    carouselImagePostions.forEach((imagePosition) => {
      imagePosition.classList.remove(styles.image_selector_filled);
    });
    carouselImagePostions[carouselIndex].classList.add(
      styles.image_selector_filled
    );
  }, [carouselIndex]);
  return (
    <div
      className={styles.carousel}
      style={{ backgroundImage: `url(${backgroundArray[carouselIndex]})` }}
    >
      <div
        className={styles.forward_arrow}
        onClick={() => changeCarouselIndex(1)}
      >
        <ForwardArrowSVG />
      </div>
      <div
        className={styles.back_arrow}
        onClick={() => changeCarouselIndex(-1)}
      >
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
