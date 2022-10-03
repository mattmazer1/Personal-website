import ContactComponent from "../Components/Contact";
import Error from "../Components/Error";
import Success from "../Components/Success";

export default function Contact() {
	return (
		<div>
			<Success />
			<Error />
			<ContactComponent />
		</div>
	);
}
