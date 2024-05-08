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

export default Button;
