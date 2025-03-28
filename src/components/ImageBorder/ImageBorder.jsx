import styles from "./ImageBorder.module.css";
import PropTypes from "prop-types";

function ImageBorder({
  src,
  alt,
  className = "",
  gradientColors = ["#104920", "#a0f8c7", "#104920", "#a0f8c7"],
}) {
  return (
    <div
      className={`${styles.imageBorderWrapper} ${className}`}
      style={{
        "--gradient-color-1": gradientColors[0],
        "--gradient-color-2": gradientColors[1],
        "--gradient-color-3": gradientColors[2],
        "--gradient-color-4": gradientColors[3],
      }}
    >
      <img src={src} alt={alt} className={styles.imageBorder} />
    </div>
  );
}

ImageBorder.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  gradientColors: PropTypes.arrayOf(PropTypes.string),
};

export default ImageBorder;
