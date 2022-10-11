import { useEffect, useState } from "react";
import axios from "axios";

import { Title } from "../../components";

import { capitalizeFirstLetter, removeIcon } from "../../utils";

type Values = {
  activity: string;
  participants: number;
  type: string;
  price: number;
  accessibility: number;
  link: string;
};

const ActivityResult = ({ data, loader, toggleLoader }) => {
  const { participants, type, price, accessibility } = data;

  const [values, setValues] = useState<Values>({
    activity: "",
    participants: undefined,
    type: "",
    price: undefined,
    accessibility: undefined,
    link: "",
  });

  const url = `https://www.boredapi.com/api/activity?type=${removeIcon(
    type
  )}&participants=${participants === undefined ? "" : participants}&price=${
    price === undefined ? "" : price
  }&accessibility=${accessibility === undefined ? "" : accessibility}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setValues({
          activity: response.data.activity,
          participants: response.data.participants,
          type: response.data.type,
          price: response.data.price,
          accessibility: response.data.accessibility,
          link: response.data.link,
        });
        toggleLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loader]);

  // if (loader) {
  //   return (
  //     <div className="flex items-center justify-center p-10">
  //       <div
  //         className="spinner-border inline-block h-20 w-20 animate-spin rounded-full border-4 border-matchBlue-900 text-2xl text-matchBlue-900"
  //         role="status"
  //       >
  //         <span className="visually-hidden">.</span>
  //       </div>
  //     </div>
  //   );
  // }

  if (values.activity === "" || values.activity === undefined) {
    return (
      <p className="p-5 text-center">
        No activity found with the specified parameters
      </p>
    );
  }
  return (
    <>
      <Title title={"Not anymore"} />
      {loader && (
        <div className="flex items-center justify-center p-10">
          <div
            className="spinner-border inline-block h-20 w-20 animate-spin rounded-full border-4 border-matchBlue-900 text-2xl text-matchBlue-900"
            role="status"
          >
            <span className="visually-hidden">.</span>
          </div>
        </div>
      )}
      {!loader && (
        <div className="m-3 flex flex-col items-center justify-center rounded-xl border-4 border-solid border-matchBlue-900 bg-yellow-200 p-3">
          <h1 className="p-2 text-center sm:text-3xl">{values.activity}</h1>
          <div className="flex flex-col items-center justify-between">
            <p className="p-2 text-center">
              Participants 👫 {values.participants && values.participants}
            </p>
            <p className="p-2 text-center">
              Type 👉 {values.type && capitalizeFirstLetter(values.type)}
            </p>
            <p className="p-2 text-center">
              Price 💰 {values.price && values.price}
            </p>
            <p className="p-2 text-center">
              Accessibility ♿ {values.accessibility && values.accessibility}
            </p>
            {values.link && (
              <a
                className="p-2 text-center"
                href={values.link}
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
