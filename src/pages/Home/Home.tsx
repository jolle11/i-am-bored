import { Title, Form } from "../../components";

const Home = () => {
  const title: string = "I am bored";
  return (
    <div className="flex flex-col items-center justify-center">
      <Title title={title} />
      <Form />
    </div>
  );
};

export default Home;
