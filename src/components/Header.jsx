import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <img
          className="image"
          src="https://media.istockphoto.com/id/1382305677/vector/finance-logo-vector-illustration-in-trendy.jpg?s=612x612&w=0&k=20&c=37WbXhqdKzvIq7kmltVoGZaBHcUE_Mhll23cyQpgij8="
          alt="bgpic"
        />
        <span>Welcome to Banking</span>

        <button className="btn first" onClick={() => navigate("/signup")}>
          Sign up
        </button>

        <button className="btn second" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
      <HeroSection />
    </>
  );
}

export default Header;
