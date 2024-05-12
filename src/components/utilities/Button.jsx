import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function Button({ children }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/game");
  };

  return (
    <button className="btnPrimary" onClick={handleNavigation}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.object,
};

export default Button;
