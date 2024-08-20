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
        {/* <p className={styles.company_message_text}>
          Moreover, green represents growth, renewal, and a fresh
          perspective—values that are at the core of our brand identity. We are
          constantly innovating, seeking out new ways to enhance our products
          and processes while staying true to our commitment to sustainability.
          Our love for green drives us to explore creative solutions that not
          only meet the needs of today but also safeguard the future. In every
          stitch and seam, you’ll find our dedication to creating fashion that
          is both beautiful and responsible.
        </p> */}
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
