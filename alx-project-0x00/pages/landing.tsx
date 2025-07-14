import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
	return (
		<div>
			<h1 className="text-xl font-extralight">Landing Page</h1>
			<Card />

			<Button title="Small and rounded button" styles="px-3 py-1 text-sm rounded-sm"/>
			<Button title="Medium and rounded button" styles="px-5 py-2 text-base rounded-md"/>
			<Button title="Large and rounded button" styles="px-6 py-3 text-lg rounded-lg"/>
		</div>
	);
};

export default Landing;
