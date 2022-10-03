import { useContext } from "react";
import { SuccessContext } from "../App";

export default function Success() {
	const { showSuccess } = useContext(SuccessContext);

	return (
		<div className="relative flex justify-center">
			<div
				className="absolute mt-20 bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-center text-green-700 items-center w-72"
				role="alert"
				id={showSuccess ? "on" : "off"}
			>
				Your message has been sent!
			</div>
		</div>
	);
}
