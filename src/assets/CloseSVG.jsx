import PropTypes from "prop-types";

const CloseSVG = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="#5f6368"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
};

CloseSVG.propTypes = {
  className: PropTypes.string,
};
export default CloseSVG;
