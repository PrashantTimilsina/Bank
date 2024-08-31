import { createContext, useContext, useState } from "react";

const userContext = createContext();
function UserProvider({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [sapati, setSapati] = useState("");
  const [transfer, setTransfer] = useState("");

  return (
    <userContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        confirmPassword,
        setconfirmPassword,
        loginUsername,
        loginPassword,
        setLoginUsername,
        setLoginPassword,
        deposit,
        setDeposit,
        withdraw,
        setWithdraw,
        sapati,
        setSapati,
        transfer,
        setTransfer,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
function useData() {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error("Cities context was used outside the userProvider");
  }
  return context;
}
export { UserProvider, useData };
