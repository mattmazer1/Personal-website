import { useRef, useContext } from "react";
import { ErrorContext, SuccessContext } from "../App";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ContactComponent() {
	const { setShowError } = useContext(ErrorContext);
	const { setShowSuccess } = useContext(SuccessContext);
	const form: any = useRef();

	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID as string,
				process.env.REACT_APP_TEMPLATE_ID as string,
				form.current,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("Email sent");
					setShowSuccess(true);
					const success = setTimeout(() => {
						setShowSuccess(false);
						window.location.reload();
					}, 1000);

					return () => clearTimeout(success);
				},
				(error) => {
					console.log(error.text);
					console.log("Email error");
					setShowError(true);
					const fail = setTimeout(() => {
						setShowError(false);
						window.location.reload();
					}, 1000);

					return () => clearTimeout(fail);
				}
			);
	};

	return (
		<>
			<div className="flex justify-start">
				<div className=" mt-12 sm:mt-28 ml-20 text-2xl sm:hover:text-amber-500">
					<Link to="/">
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="mr-2"
						></FontAwesomeIcon>
						Home
					</Link>
				</div>
			</div>

			<section className="mt-20 flex justify-center ">
				<h1 className="text-2xl">Contact me</h1>
			</section>

			<div className="flex flex-col items-center mt-5 sm:mt-5 mb-40 ml-20 mr-20">
				<div className="block p-6 rounded-lg shadow-lg bg-white w-formW sm:w-96 ">
					<form ref={form} onSubmit={sendEmail}>
						<div className="form-group mb-6">
							<input
								type="text"
								className="formBody"
								placeholder="Name"
								name="user_name"
								required
							/>
						</div>

						<div className="form-group mb-6">
							<input
								type="email"
								className="formBody"
								placeholder="Your email"
								name="user_email"
								required
							/>
						</div>

						<div className="form-group mb-6">
							<textarea
								className="formBody h-44 "
								placeholder="Message"
								name="message"
								required
							/>
						</div>

						<button type="submit" className="submitButton" value="Send">
							Send
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
