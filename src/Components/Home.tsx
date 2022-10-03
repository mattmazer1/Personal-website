import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faFileAlt,
	faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

export default function HomeComponents() {
	const [iconName, setIconName] = useState<string>("About me");
	return (
		<div>
			<div className=" flex flex-col justify-center items-center content-center mt-toph">
				<div className=" text-4xl sm:text-5xl">Matt Mazer</div>
				<div className=" text-md mt-4 sm:text-lg">Web3 developer</div>
			</div>
			<div className="flex flex-row flex-wrap justify-center items-center content-center mt-6 ">
				<BrowserView>
					<a
						href="https://github.com/mattmazer1"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div
							className="iconsBase hover:border-2 border-white shadow-md hover:shadow-white"
							onMouseOver={() => setIconName("Github")}
							onMouseLeave={() => setIconName("About me")}
						>
							<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
						</div>
					</a>
				</BrowserView>

				<MobileView>
					<a
						href="https://github.com/mattmazer1"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="iconsBase">
							<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
						</div>
					</a>
				</MobileView>

				<BrowserView>
					<Link to="/portfolio">
						<div
							className="iconsBase hover:border-2 border-white shadow-md hover:shadow-white"
							onMouseOver={() => setIconName("Portfolio")}
							onMouseLeave={() => setIconName("About me")}
						>
							<FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon>
						</div>
					</Link>
				</BrowserView>

				<MobileView>
					<Link to="/portfolio">
						<div className="iconsBase">
							<FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon>
						</div>
					</Link>
				</MobileView>

				<BrowserView>
					<Link to="/contact">
						<div
							className="iconsBase hover:border-2 border-white shadow-md hover:shadow-white"
							onMouseOver={() => setIconName("Contact me")}
							onMouseLeave={() => setIconName("About me")}
						>
							<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
						</div>
					</Link>
				</BrowserView>

				<MobileView>
					<Link to="/contact">
						<div className="iconsBase">
							<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
						</div>
					</Link>
				</MobileView>

				<BrowserView>
					<a
						href="https://nz.linkedin.com/in/matt-mazer"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div
							className="iconsBase hover:border-2 border-white shadow-md hover:shadow-white"
							onMouseOver={() => setIconName("LinkedIn")}
							onMouseLeave={() => setIconName("About me")}
						>
							<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
						</div>
					</a>
				</BrowserView>

				<MobileView>
					<a
						href="https://nz.linkedin.com/in/matt-mazer"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="iconsBase">
							<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
						</div>
					</a>
				</MobileView>

				<BrowserView>
					<a
						href="https://drive.google.com/file/d/1hHOpaFgxa5p4ge8Z1dxcuEHyEcphXfqL/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div
							className="iconsBase hover:border-2 border-white shadow-md hover:shadow-white"
							onMouseOver={() => setIconName("Resume")}
							onMouseLeave={() => setIconName("About me")}
						>
							<FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
						</div>
					</a>
				</BrowserView>

				<MobileView>
					<a
						href="https://drive.google.com/file/d/1hHOpaFgxa5p4ge8Z1dxcuEHyEcphXfqL/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="iconsBase">
							<FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
						</div>
					</a>
				</MobileView>
			</div>
			<div className=" flex flex-col justify-center items-center content-center mt-5 ">
				<div className=" text-lg sm:text-xl mb-60 text-slate-300 hover:text-white">
					<Link to="/about">{iconName}</Link>
				</div>
			</div>
		</div>
	);
}
