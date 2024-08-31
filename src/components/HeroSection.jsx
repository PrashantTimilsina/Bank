import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero">
        <p>
          <span>
            Empower your financial freedom with our Visa Card. Enjoy seamless
            transactions, secure payments, and global acceptance wherever life
            takes you. Whether you're shopping online or traveling abroad, our
            Visa Card offers convenience, rewards, and peace of mind. Experience
            the power of banking in your hands. Apply today and unlock a world
            of possibilities.
          </span>
        </p>
        <h1 className="logo">💳</h1>
      </div>
      <div className="hero">
        <p>
          <span>
            Empower your financial freedom with our Visa Card. Enjoy seamless
            transactions, secure payments, and global acceptance wherever life
            takes you. Whether you're shopping online or traveling abroad, our
            Visa Card offers convenience, rewards, and peace of mind. Experience
            the power of banking in your hands. Apply today and unlock a world
            of possibilities.
          </span>
        </p>
        <h1 className="logo">🏧</h1>
      </div>
      <div className="hero">
        <p>
          <span>
            Our bank offers a range of loan solutions tailored to meet your
            financial needs. Whether you’re planning to buy a home, start a
            business, or manage unexpected expenses, our flexible loan options
            provide competitive rates and easy repayment plans. With a quick
            approval process and personalized support, we help you achieve your
            financial goals with confidence.
          </span>
        </p>
        <h1 className="logo">💰</h1>
      </div>
      <div className="last">
        <button onClick={() => navigate("/signup")}>Get Started</button>
        <i className="fa-brands fa-facebook "></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </>
  );
}

export default HeroSection;
