import { Link } from "react-router-dom";
import styles from "./companymessage.module.css";
import granny from "../../assets/green_grandma.jpg";
const CompanyMessage = () => {
  return (
    <div className={styles.company_message}>
      <div className={styles.company_message_left}>
        <h3 className={styles.company_message_title}>What we believe in </h3>
        <p className={styles.company_message_text}>
          At our clothing company, green is more than just a color, it&apos;s a symbol
          of our commitment to sustainability and a better future. We believe
          that fashion should be as kind to the planet as it is stylish, and our
          love for green reflects this ethos. From using eco-friendly materials
          to implementing energy-efficient practices, we strive to minimize our
          environmental impact. Every decision we make is guided by a deep
          respect for nature, ensuring that our products contribute positively
          to the world around us.
        </p>
        <Link to="/store" className={styles.company_message_shop_btn}>
          Shop Now
        </Link>
      </div>

      <div className={styles.image_container}>
        <img src={granny} alt="Old lady wearing green clothes" />
      </div>
    </div>
  );
};

export default CompanyMessage;
