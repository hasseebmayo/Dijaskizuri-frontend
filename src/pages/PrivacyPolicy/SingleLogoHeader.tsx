import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/images";
import "./privacy.scss";
const SingleLogoHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="logo-single-header">
      <Logo
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default SingleLogoHeader;
