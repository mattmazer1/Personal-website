import { useContext } from "react";
import { ErrorContext } from "../App";

export default function Error() {
	const { showError } = useContext(ErrorContext);

	return (
		<div className="relative flex justify-center">
			<div
				className="absolute mt-20 bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-center text-red-700 items-center w-72"
				role="alert"
				id={showError ? "on" : "off"}
			>
				There was an error
			</div>
		</div>
	);
}
