import PropTypes from "prop-types";

export default function Temperature({ temperature }) {
  return <span>{temperature + "\u00B0"}</span>;
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
};
