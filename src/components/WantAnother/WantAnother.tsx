import { useNavigate } from "react-router-dom";

const WantAnother = ({ toggleLoader }) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  };
  const handleClickRefresh = () => {
    toggleLoader(true);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleClickBack}
        className="m-2 rounded-full bg-matchBlue-900 p-3 text-white shadow-xl transition-all hover:bg-matchBlue-1100"
      >
        Go Back
      </button>
      <button
        onClick={handleClickRefresh}
        className="margin-1 rounded-full bg-matchBlue-900 p-3 text-white shadow-xl transition-all hover:bg-matchBlue-1100"
      >
        I want something else
      </button>
    </div>
  );
};

export default WantAnother;
