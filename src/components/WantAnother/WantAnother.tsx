import { useNavigate } from "react-router-dom";

const WantAnother = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    console.log("Back we go");
    navigate("/");
  };
  const handleClickRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleClickBack} className="rounded bg-purple-400 p-3">
        Go Back
      </button>
      <button onClick={handleClickRefresh} className="rounded bg-amber-300 p-3">
        I want something else
      </button>
    </div>
  );
};

export default WantAnother;
