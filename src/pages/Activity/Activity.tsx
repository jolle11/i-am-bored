import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";

import { WantAnother, ActivityResult } from "../../components";

interface IProps {
  isLoading: boolean;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

const Activity = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <WantAnother toggleLoader={setIsLoading} />
      <ActivityResult
        data={location.state}
        loader={isLoading}
        toggleLoader={setIsLoading}
      />
    </div>
  );
};

export default Activity;
