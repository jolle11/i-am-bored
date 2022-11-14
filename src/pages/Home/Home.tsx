import { Title, Form, Footer } from "../../components";

const Home = () => {
	const title: string = "I am bored";
	return (
		<div className="flex flex-col items-center justify-center">
			<Title title={title} />
			<Form />
			<Footer />
		</div>
	);
};

export default Home;
