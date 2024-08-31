import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { UserProvider } from "./contexts/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Deposit from "./components/Deposit";
import { useReducer } from "react";
import Withdraw from "./components/Withdraw";
import Loan from "./components/Loan";
import Transfer from "./components/Transfer";
import HeroSection from "./components/HeroSection";
import Internet from "./components/Internet";
import Khanepani from "./components/Khanepani";
import Electricity from "./components/Electricity";
const initialState = {
  balance: 10000,
  loan: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "loan":
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: state.loan + action.payload,
      };
    case "transfer":
      return { ...state, balance: state.balance - action.payload };
    default:
      return state;
  }
}
function App() {
  const [{ balance, loan }, dispatch] = useReducer(reducer, initialState);
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="main" element={<Main balance={balance} loan={loan} />} />
          <Route
            path="0"
            element={
              <Deposit dispatch={dispatch} balance={balance} loan={loan} />
            }
          />
          <Route
            path="1"
            element={
              <Withdraw dispatch={dispatch} balance={balance} loan={loan} />
            }
          />
          <Route
            path="2"
            element={<Loan dispatch={dispatch} balance={balance} loan={loan} />}
          />
          <Route
            path="7"
            element={
              <Transfer dispatch={dispatch} balance={balance} loan={loan} />
            }
          />
          <Route path="6" element={<Header />} />
          <Route path="5" element={<Internet />} />
          <Route path="4" element={<Khanepani />} />
          <Route path="3" element={<Electricity />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
