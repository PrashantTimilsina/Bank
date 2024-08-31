import { useData } from "../contexts/Context";
import Top from "./Top";
function Transfer({ dispatch, balance, loan }) {
  const { transfer, setTransfer } = useData();
  function handleTransfer() {
    dispatch({ type: "transfer", payload: transfer });
    alert("An amount has been transferred to your friend's account");
    setTransfer("");
  }
  return (
    <>
      <Top balance={balance} loan={loan} />

      <div className="deposit">
        <ul>
          <h1>Transfer Amount</h1>
          <h3>Enter amount</h3>
          <input
            className="depositamount"
            type="text"
            placeholder="Enter amount"
            value={transfer}
            onChange={(e) => setTransfer(Number(e.target.value))}
          />
          <button className="confirm" onClick={handleTransfer}>
            Confirm
          </button>
        </ul>
        <h1 className="emoji depo">🤝</h1>
      </div>
    </>
  );
}

export default Transfer;
