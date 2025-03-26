import { motion } from "framer-motion";
import styles from "./FlickerText.module.css";
import PropTypes from "prop-types";

const FlickerText = ({ text }) => {
  return (
    <motion.h2
      className={styles.flicker}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.h2>
  );
};

FlickerText.propTypes = {
  text: PropTypes.string.isRequired
};

export default FlickerText;
