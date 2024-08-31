import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/Context";
import NewHeader from "./NewHeader";

function Login() {
  //   const { username, setUsername } = userProvider(userContext);
  const {
    loginUsername,
    setLoginUsername,
    setLoginPassword,
    loginPassword,
    showPassword,
    setShowPassword,
  } = useData();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/main");
  }
  function ToggleText() {
    setShowPassword(() => !showPassword);
  }
  const navigate = useNavigate();
  return (
    <>
      <NewHeader />
      <div className="form">
        <form>
          <h2>Login</h2>
          <label htmlFor="username">
            <h4>Enter Username</h4>
            <input
              className="same"
              type="text"
              id="username"
              placeholder="Enter Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </label>

          <label htmlFor="password">
            <h4>Enter Password</h4>
            <input
              className="same"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </label>

          {showPassword ? (
            <i className="fa-solid fa-eye-slash" onClick={ToggleText}></i>
          ) : (
            <i className="fa-solid fa-eye" onClick={ToggleText}></i>
          )}

          <button className="btn" type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      <h1 className="emoji">
        <span>🔓</span>
      </h1>
      <button className="back" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

export default Login;
