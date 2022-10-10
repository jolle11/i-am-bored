import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { capitalizeFirstLetter } from "../../utils";

const types: string[] = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

type Values = {
  participants?: number;
  type?: string;
  price?: number;
  accessibility?: number;
};

const Form = () => {
  const [values, setValues] = useState<Values>({
    participants: undefined,
    type: "",
    price: undefined,
    accessibility: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/activity", {
      state: {
        participants: values.participants,
        type: values.type,
        price: values.price,
        accessibility: values.accessibility,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <button className="rounded bg-green-400 p-3">Get something to do</button>
      <legend>Want to be more specific?</legend>
      <fieldset className="flex flex-col items-center justify-between">
        <p>
          <label htmlFor="participants">Participants 👫</label>
          <input
            type="number"
            name="participants"
            className="border"
            min="1"
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="type">Type </label>
          <select name="type" className="border" onChange={handleChange}>
            <option disabled={true} selected={true}>
              Select something
            </option>
            {types.map((type) => {
              return (
                <option key={type} value={type}>
                  {capitalizeFirstLetter(type)}
                </option>
              );
            })}
          </select>
        </p>
        <p>
          <label htmlFor="price">Price 💰 </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0"
            name="price"
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="accessibility">Accessibility ♿ </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0"
            name="accessibility"
            onChange={handleChange}
          />
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
