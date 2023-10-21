import { useAppSelector } from "../../app/hooks";
import { Title } from "../../components";
import { useFetchActivitiesQuery } from "../../features/activities/activityApiSlice";
import { capitalizeFirstLetter } from "../../utils";

const ActivityResult = () => {
    const activity = useAppSelector((state) => state.activity);

    const { data, isFetching } = useFetchActivitiesQuery({
        participants: activity.participants!,
        type: activity.type,
        price: activity.price!,
        accessibility: activity.accessibility!,
    });

    return (
        <>
            <Title title={"Not anymore"} />
            {isFetching && (
                <div className="flex items-center justify-center p-10">
                    <div
                        className="spinner-border inline-block h-20 w-20 animate-spin rounded-full border-4 border-matchBlue-900 text-2xl text-matchBlue-900"
                        role="status"
                    >
                        <span className="visually-hidden">.</span>
                    </div>
                </div>
            )}
            {(data?.activity === "" && !isFetching) ||
                (data?.activity === undefined && !isFetching && (
                    <div>
                        <p className="p-5 text-center">
                            No activity found with the specified parameters
                        </p>
                    </div>
                ))}

            {!isFetching && !!data && (
                <div className="m-3 flex flex-col items-center justify-center rounded-xl border-4 border-solid border-matchBlue-900 bg-yellow-200 p-3">
                    <h1 className="p-2 text-center sm:text-3xl">
                        {data.activity}
                    </h1>
                    <div className="flex flex-col items-center justify-between">
                        <p className="p-2 text-center">
                            Participants 👫{" "}
                            {data.participants && data.participants}
                        </p>
                        <p className="p-2 text-center">
                            Type 👉{" "}
                            {data.type && capitalizeFirstLetter(data.type)}
                        </p>
                        <p className="p-2 text-center">
                            Price 💰 {data.price && data.price}
                        </p>
                        <p className="p-2 text-center">
                            Accessibility ♿
                            {data.accessibility && data.accessibility}
                        </p>
                        {data.link && (
                            <a
                                className="p-2 text-center"
                                href={data.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Start here
                            </a>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ActivityResult;
