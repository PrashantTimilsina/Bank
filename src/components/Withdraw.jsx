import { useData } from "../contexts/Context";
import Top from "./Top";

function Withdraw({ dispatch, balance, loan }) {
  const { withdraw, setWithdraw } = useData();
  function handleWithdraw() {
    dispatch({ type: "withdraw", payload: withdraw });
    alert("Withdrawal Completed💲");
    setWithdraw("");
  }
  return (
    <>
      <Top balance={balance} loan={loan} />

      <div className="deposit">
        <ul>
          <h1>Withdraw Amount</h1>
          <h3>Enter amount</h3>
          <input
            className="depositamount"
            type="text"
            placeholder="Enter amount"
            value={withdraw}
            onChange={(e) => setWithdraw(Number(e.target.value))}
          />
          <button className="confirm" onClick={handleWithdraw}>
            Confirm
          </button>
        </ul>
        <h1 className="emoji depo">💰</h1>
      </div>
    </>
  );
}

export default Withdraw;
