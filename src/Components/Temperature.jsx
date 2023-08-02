import PropTypes from "prop-types";

export default function Temperature({ temperature, showIcon = false }) {
  return (
    <span>
      {showIcon && <i className="fa-solid fa-temperature-three-quarters small dim"></i>} {temperature}°
    </span>
  );
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  showIcon: PropTypes.bool,
};
