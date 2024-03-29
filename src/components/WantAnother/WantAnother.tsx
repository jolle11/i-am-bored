import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useFetchActivitiesQuery } from "../../features/activities/activityApiSlice";
import { reset } from "../../features/activities/activitySlice";

const WantAnother = () => {
    const activity = useAppSelector((state) => state.activity);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleClickBack = () => {
        dispatch(reset());
        navigate("/");
    };

    const { refetch } = useFetchActivitiesQuery({
        participants: activity.participants!,
        type: activity.type,
        price: activity.price!,
        accessibility: activity.accessibility!,
    });

    function handleRefetchOne() {
        refetch();
    }

    return (
        <div className="flex items-center justify-center">
            <button
                type="button"
                onClick={handleClickBack}
                className="m-2 rounded-full bg-matchBlue-900 p-3 text-white shadow-xl transition-all hover:bg-matchBlue-1100"
            >
                Go Back
            </button>
            <button
                type="button"
                onClick={handleRefetchOne}
                className="margin-1 rounded-full bg-matchBlue-900 p-3 text-white shadow-xl transition-all hover:bg-matchBlue-1100"
            >
                I want something else
            </button>
        </div>
    );
};

export default WantAnother;
