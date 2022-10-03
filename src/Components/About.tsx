import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function AboutComponent() {
	return (
		<div className="flex justify-center">
			<div className="flex flex-col justify-start mt-top2h sm:mt-top2 max-w-xs sm:max-w-2xl text-md sm:text-lg ml-5 mr-5 text-slate-200 ">
				<div className=" text-5xl sm:text-6xl">
					const <i className="text-orange-500">matt</i> =
				</div>
				<div className="mt-12">
					I'm a <i className="text-orange-500 "> web3 developer </i>
					based in Auckland NZ. I have a passion for building software,
					specifically blockchain tech such as smart contracts and decentralised
					applications. I'm fascinated by how this emerging technology can be
					used to solve problems as well as create limitless opportunities. My
					ambition is to innovate and contribute to this field and have the
					opportunity to further develop my skills in order to produce
					high-quality solutions to real-world problems.
				</div>
				<div className="mt-5 sm:mt-1">
					Take a look at my{" "}
					<a
						href="https://drive.google.com/file/d/1YPeLBq4xHHjmJbYNDBjZHSpFeBR0Yyhy/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="text-orange-500">resume</i>
					</a>{" "}
					and my
					<a
						href="https://github.com/mattmazer1"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="text-orange-500 "> GitHub account</i>
					</a>
					. You can contact me
					<Link to="/contact">
						<i className="text-orange-500 "> here</i>
					</Link>
					. Don't hesitate to reach out!
				</div>

				<div className="mt-5">Technologies:</div>
				<div>
					Solidity, Ethers.js, React.js, Typescript, Javascript, Redux, HTML,
					CSS, SASS, Tailwind, Node.js, Express.js, SQL, Postgres, MongoDB,
					Mongoose, Python, Hardhat, Git
				</div>

				<div className=" text-5xl sm:text-6xl mt-10">;</div>

				<div className="mt-10 mb-14 text-orange-500 sm:hover:text-white max-w-fit">
					<Link to="/">
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="mr-2"
						></FontAwesomeIcon>
						<i>back home</i>
					</Link>
				</div>
			</div>
		</div>
	);
}
