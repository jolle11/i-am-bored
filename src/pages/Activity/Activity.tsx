import { useLocation } from "react-router-dom";

import { WantAnother, ActivityResult } from "../../components";

const Activity = () => {
  const location = useLocation();

  return (
    <div>
      <WantAnother />
      <ActivityResult data={location.state} />
    </div>
  );
};

export default Activity;
