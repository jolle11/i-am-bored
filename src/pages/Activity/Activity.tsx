import { useLocation } from "react-router-dom";

import { WantAnother, ActivityResult } from "../../components";

const Activity = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center">
      <WantAnother />
      <ActivityResult data={location.state} />
    </div>
  );
};

export default Activity;
