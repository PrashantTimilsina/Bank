import { useData } from "../contexts/Context";
import Top from "./Top";

function Deposit({ dispatch, balance, loan }) {
  const { deposit, setDeposit } = useData();
  function handleDeposit() {
    dispatch({ type: "deposit", payload: deposit });
    alert("Deposited✅");
    setDeposit("");
  }
  return (
    <>
      <Top balance={balance} loan={loan} />

      <div className="deposit">
        <ul>
          <h1>Deposit Amount</h1>
          <h3>Enter amount</h3>
          <input
            className="depositamount"
            type="text"
            placeholder="Enter amount"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
          />
          <button className="confirm" onClick={handleDeposit}>
            Confirm
          </button>
        </ul>
        <h1 className="emoji depo">🤑</h1>
      </div>
    </>
  );
}

export default Deposit;
