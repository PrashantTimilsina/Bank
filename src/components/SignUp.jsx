import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/Context";
import NewHeader from "./NewHeader";

function SignUp() {
  //   const { username, setUsername } = userProvider(userContext);
  const {
    username,
    setUsername,
    setPassword,
    password,
    showPassword,
    setShowPassword,
    setconfirmPassword,
    confirmPassword,
    setLoginUsername,
    setLoginPassword,
  } = useData();

  function handleSubmit(e) {
    e.preventDefault();
    setLoginUsername(username);
    setLoginPassword(password);

    setPassword("");
    setUsername("");
    setconfirmPassword("");
    setShowPassword(false);
    alert("Success!✅Your details are in login page");
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
          <h2>Sign Up</h2>
          <label htmlFor="username">
            <h4>Enter Username</h4>
            <input
              className="same"
              type="text"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label htmlFor="password">
            <h4>Enter Password</h4>
            <input
              className="same"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {showPassword ? (
            <i className="fa-solid fa-eye-slash" onClick={ToggleText}></i>
          ) : (
            <i className="fa-solid fa-eye" onClick={ToggleText}></i>
          )}

          <label htmlFor="confirmpassword">
            <h4>Confirm Password</h4>
            <input
              className="same"
              type={showPassword ? "text" : "password"}
              id="confirmpassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </label>
          {showPassword ? (
            <i className="fa-solid fa-eye-slash" onClick={ToggleText}></i>
          ) : (
            <i className="fa-solid fa-eye" onClick={ToggleText}></i>
          )}

          <button className="btn" type="submit" onClick={handleSubmit}>
            Sign up
          </button>
        </form>
      </div>
      <h1 className="emoji">
        <span>💸</span>
      </h1>
      <button className="back" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

export default SignUp;
