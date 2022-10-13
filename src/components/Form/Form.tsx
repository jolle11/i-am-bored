import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { capitalizeFirstLetter } from "../../utils";

const types: string[] = [
  "education 🎓",
  "recreational 🛝",
  "social 🎉",
  "diy ⚒️",
  "charity 🤲",
  "cooking 🧑‍🍳",
  "relaxation 💆",
  "music 🎵",
  "busywork 💼",
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

  const handleChange = (e: any) => {
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
      className="flex flex-col items-center justify-center "
    >
      <button className="w-full rounded-full bg-matchBlue-900 p-3 text-xl text-white shadow-xl transition-all hover:bg-matchBlue-1100">
        Get something to do
      </button>
      <legend className="p-5 text-center">
        Want to be more specific? <br />
        (if you want to)
      </legend>
      <fieldset className="flex flex-col items-center justify-between rounded-xl border-4 border-solid border-matchBlue-900 bg-yellow-200 p-3">
        <p className="p-2">
          <label htmlFor="participants">Participants 👫 </label>
          <input
            type="number"
            name="participants"
            className="h-8 w-12 rounded border-2 border-solid border-yellow-300 bg-transparent text-center"
            min="1"
            onChange={handleChange}
          />
        </p>
        <p className="p-2">
          <label htmlFor="type">Type </label>
          <select
            name="type"
            className="h-8 rounded border-2 border-solid border-yellow-300 bg-transparent"
            onChange={handleChange}
          >
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
        <p className="p-2">
          <label htmlFor="price">Price 💰 </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0"
            name="price"
            className="h-2 appearance-none rounded bg-gray-300"
            onChange={handleChange}
          />
        </p>
        <p className="p-2">
          <label htmlFor="accessibility">Accessibility ♿ </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0"
            name="accessibility"
            className="h-2 appearance-none rounded bg-gray-300"
            onChange={handleChange}
          />
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
