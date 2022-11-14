import { WantAnother, ActivityResult, Footer } from "../../components";

const Activity = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<WantAnother />
			<ActivityResult />
			<Footer />
		</div>
	);
};

export default Activity;
