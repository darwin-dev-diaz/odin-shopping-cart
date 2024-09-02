import styles from "./home.module.css";
import Carousel from "../../components/carousel/Carousel";
import CompanyMessage from "../../components/company_message/CompanyMessage";

const Home = () => {
  return (
    <div className={styles.home}>
      <Carousel />
      <CompanyMessage />
    </div>
  );
};

export default Home;
