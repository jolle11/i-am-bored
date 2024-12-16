import { Alert, Footer, Form, Title } from "../../components";

const Home = () => {
    const title: string = "I am bored";
    return (
        <div className="flex flex-col items-center justify-center">
            <Alert />
            <Title title={title} />
            <Form />
            <Footer />
        </div>
    );
};

export default Home;
