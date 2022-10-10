import { useNavigate } from "react-router-dom";

const WantAnother = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Back we go");
    navigate("/");
  };

  return (
    <>
      <button onClick={handleClick} className="rounded bg-amber-300 p-3">
        I want something else
      </button>
    </>
  );
};

export default WantAnother;
