interface Props {
    title?: string;
}

const Title = ({ title }: Props) => {
    return <h1 className="p-5 text-center text-5xl sm:text-8xl">{title}</h1>;
};

export default Title;
