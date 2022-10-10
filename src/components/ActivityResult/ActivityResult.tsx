import { useEffect, useState } from "react";
import axios from "axios";

import { capitalizeFirstLetter } from "../../utils";

type Values = {
  activity: string;
  participants: number;
  type: string;
  price: number;
  accessibility: number;
  link: string;
};

const ActivityResult = ({ data }) => {
  const { participants, type, price, accessibility } = data;

  const [values, setValues] = useState<Values>({
    activity: "",
    participants: undefined,
    type: "",
    price: undefined,
    accessibility: undefined,
    link: "",
  });

  const url = `https://www.boredapi.com/api/activity?type=${type}&participants=${
    participants === undefined ? "" : participants
  }&price=${price === undefined ? "" : price}&accessibility=${
    accessibility === undefined ? "" : accessibility
  }`;
  console.log(url);

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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{values.activity}</h1>
      <div className="flex flex-col items-center justify-between">
        <p>Participants 👫 {values.participants && values.participants}</p>
        <p>Type: {values.type && capitalizeFirstLetter(values.type)}</p>
        <p>Price 💰{values.price && values.price}</p>
        <p>Accessibility ♿ {values.accessibility && values.accessibility}</p>
        {values.link && (
          <a href={values.link} target="_blank" rel="noreferrer">
            Start here
          </a>
        )}
      </div>
    </div>
  );
};

export default ActivityResult;
