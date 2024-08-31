import { useData } from "../contexts/Context";
import Top from "./Top";

function Deposit({ dispatch, balance, loan }) {
  const { sapati, setSapati } = useData();
  function handleLoan() {
    dispatch({ type: "loan", payload: sapati });
    alert("An amount has been transferred to your account");
    setSapati("");
  }
  return (
    <>
      <Top balance={balance} loan={loan} />

      <div className="deposit">
        <ul>
          <h1>Loan Amount</h1>
          <h3>Enter amount</h3>
          <input
            className="depositamount"
            type="text"
            placeholder="Enter amount"
            value={sapati}
            onChange={(e) => setSapati(Number(e.target.value))}
          />
          <button className="confirm" onClick={handleLoan}>
            Confirm
          </button>
        </ul>
        <h1 className="emoji depo">💹</h1>
      </div>
    </>
  );
}

export default Deposit;
