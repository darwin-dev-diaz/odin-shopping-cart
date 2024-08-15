import styles from "./promotion.module.css";
const Promotion = () => {
  return (
    <div className={styles.promotion}>
      <div className={styles.promotion_wrapper}>
        <h3 className={styles.promotion_title}>Be a part of the movement</h3>
        <span className={styles.promotion_text}>
          Enjoy 10% off your first purchase when you sign up!
        </span>
        <form action="" className={styles.promotion_form}>
          <input
            type="email"
            name="email"
            id="promotion-email"
            className={styles.promotion_email}
            placeholder="Enter your email here"
            minLength="1"
          />
          <button type="button" className={styles.promotion_submit}>
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Promotion;
