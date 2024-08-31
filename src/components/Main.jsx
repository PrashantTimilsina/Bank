import { useNavigate } from "react-router-dom";
import Top from "./Top";
// const balance = 100000;
const boxes = [
  {
    name: "Deposit money",
    emoji: "💲",
  },
  {
    name: "Withdraw money",
    emoji: "💸",
  },
  {
    name: "Request Loan",
    emoji: "💴",
  },
  {
    name: "Electricity",
    emoji: "⚡",
  },
  {
    name: "Khane Pani",
    emoji: "💧",
  },
  {
    name: "Internet",
    emoji: "📶",
  },
  {
    name: "Close Account",
    emoji: "🔒",
  },
  {
    name: "Transfer Money",
    emoji: "💱",
  },
];
function Main({ balance, loan }) {
  //   const { loginUsername } = useData();
  const navigate = useNavigate();
  return (
    <>
      <Top balance={balance} loan={loan} />

      <div className="boxes">
        {boxes.map((box, index) => (
          <ul key={index} onClick={() => navigate(`/${index}`)}>
            <li>{box.name}</li>
            <li className="photo">{box.emoji}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Main;
