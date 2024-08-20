import styles from "./home.module.css";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
  return (
    <div className={styles.home}>
      <Carousel />
    </div>
  );
};

export default Home;
