import { useData } from "../contexts/Context";

function Top({ balance, loan }) {
  //   const balance = 100000;

  const { loginUsername } = useData();
  return (
    <div className="main">
      <ul>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4B5rxKwG5ce-sS1UBdkx586i9lIevtbiCg&s" />
        <li>{loginUsername}</li>
        <li className="balance">Balance:{balance}</li>
        <li>Loan:{loan}</li>
      </ul>
    </div>
  );
}

export default Top;
