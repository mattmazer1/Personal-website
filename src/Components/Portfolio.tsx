import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img1 from "../Images/optionsSite.jpg";
import img2 from "../Images/votingSite.jpg";
import img3 from "../Images/ecomSite.jpg";
import img4 from "../Images/pricebetSite.jpg";
import img5 from "../Images/stakingSite.jpg";
import img6 from "../Images/mintingSite.jpg";
import img7 from "../Images/personalSite.jpg";

export default function PortfolioComponent() {
	return (
		<div>
			<div className="flex justify-start">
				<div className=" mt-12 sm:mt-10 ml-20 text-2xl sm:hover:text-amber-500">
					<Link to="/">
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="mr-2"
						></FontAwesomeIcon>
						Home
					</Link>
				</div>
			</div>

			<div className="flex flex-row flex-wrap justify-center items-center content-center mt-8 sm:mt-topPo sm:ml-5 sm:mr-5">
				<div className="block text-white p-6 rounded-lg shadow-lg bgMulti w-64 h-cardHs sm:w-80 sm:h-cardH ml-4 mr-4 mb-10">
					<div className=" flex flex-col items-center text-base mb-4">
						<h1 className=" text-lg sm:text-xl mb-4">Options trading dapp</h1>
						<img src={img1} alt="Options-site" height={200} width={200} />
						<p className="text-xs sm:text-sm mt-4 mb-4 ml-5 mr-5 text-center">
							A site where you can trade pre-funded options on the price of Eth.
							The smart contracts have automatic payouts and calculations.
						</p>

						<div className="flex flex-row absolute mt-buttonsT">
							<a
								href="https://options-trading-dapp.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton mr-2 text-xs sm:text-sm">
									Site
								</button>
							</a>

							<a
								href="https://github.com/mattmazer1/Options-trading-dapp"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton ml-2 text-xs sm:text-sm">
									Code
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="block text-white p-6 rounded-lg shadow-lg bgMulti w-64 h-cardHs sm:w-80 sm:h-cardH ml-4 mr-4 mb-10">
					<div className=" flex flex-col items-center text-base mb-4">
						<h1 className=" text-lg sm:text-xl mb-4">E-commerce dapp</h1>
						<img src={img3} alt="E-commerce-site" height={200} width={200} />
						<p className="text-xs sm:text-sm mt-4 mb-4 ml-5 mr-5 text-center">
							A dapp to purchase t-shirts with my custom ERC20 token. Stock
							values are updated with a server and database.
						</p>

						<div className="flex flex-row absolute mt-buttonsT">
							<a
								href="https://erc20-shirts-dapp.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton mr-2 text-xs sm:text-sm">
									Site
								</button>
							</a>

							<a
								href="https://github.com/mattmazer1/ERC20-dapp"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton ml-2 text-xs sm:text-sm">
									Code
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="block text-white p-6 rounded-lg shadow-lg bgMulti w-64 h-cardHs sm:w-80 sm:h-cardH ml-4 mr-4 mb-10">
					<div className=" flex flex-col items-center text-base mb-4">
						<h1 className=" text-lg sm:text-xl mb-4">Price betting dapp</h1>
						<img src={img4} alt="Price-betting-site" height={200} width={200} />
						<p className="text-xs sm:text-sm mt-4 mb-4 ml-5 mr-5 text-center">
							A betting dapp, where you bet on Eth's last 3 digits to be higher
							or lower than Eth's price after 20 seconds from the bet.
						</p>

						<div className="flex flex-row absolute mt-buttonsT">
							<a
								href="https://eth-price-bet.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton mr-2 text-xs sm:text-sm">
									Site
								</button>
							</a>

							<a
								href="https://github.com/mattmazer1/Price-betting-dapp"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton ml-2 text-xs sm:text-sm">
									Code
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="block text-white p-6 rounded-lg shadow-lg bgMulti w-64 h-cardHs sm:w-80 sm:h-cardH ml-4 mr-4 mb-10">
					<div className=" flex flex-col items-center text-base mb-4">
						<h1 className=" text-lg sm:text-xl mb-4">NFT staking dapp</h1>
						<img src={img5} alt="Staking-site" height={200} width={200} />
						<p className="text-xs sm:text-sm mt-4 mb-4 ml-5 mr-5 text-center">
							A custom NFT staking dapp where you earn an ERC20 token as a
							reward, relative to the time staked.
						</p>

						<div className="flex flex-row absolute mt-buttonsT">
							<a
								href="https://nft-stake.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton mr-2 text-xs sm:text-sm">
									Site
								</button>
							</a>

							<a
								href="https://github.com/mattmazer1/NFT-staking-dapp"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton ml-2 text-xs sm:text-sm">
									Code
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="block text-white p-6 rounded-lg shadow-lg bgMulti w-64 h-cardHs sm:w-80 sm:h-cardH ml-4 mr-4 mb-10">
					<div className=" flex flex-col items-center text-base mb-4">
						<h1 className=" text-lg sm:text-xl mb-4">Voting dapp</h1>
						<img src={img2} alt="Voting-site" height={200} width={200} />
						<p className="text-xs sm:text-sm mt-4 mb-4 ml-5 mr-5 text-center">
							A dapp hosted on IPFS used for voting purposes such as elections.
							With the aim for a decentralised and safe voting system.
						</p>

						<div className="flex flex-row absolute mt-buttonsT">
							<a
								href="https://voting-dapp.on.fleek.co/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton mr-2 text-xs sm:text-sm">
									Site
								</button>
							</a>

							<a
								href="https://github.com/mattmazer1/Voting-dapp"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton ml-2 text-xs sm:text-sm">
									Code
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="block text-white p-6 rounded-lg shadow-lg bgMulti w-64 h-cardHs sm:w-80 sm:h-cardH ml-4 mr-4 mb-10">
					<div className=" flex flex-col items-center text-base mb-4">
						<h1 className=" text-lg sm:text-xl mb-4">NFT minting dapp</h1>
						<img src={img6} alt="Minting-site" height={200} width={200} />
						<p className="text-xs sm:text-sm mt-4 mb-4 ml-5 mr-5 text-center">
							A dapp to mint 16 randomly generated ERC721 tokens living on the
							Goerli blockchain:
						</p>

						<div className="flex flex-row absolute mt-buttonsT">
							<a
								href="https://emojis-mint.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton mr-2 text-xs sm:text-sm">
									Site
								</button>
							</a>

							<a
								href="https://github.com/mattmazer1/NFT-minting-dapp"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton ml-2 text-xs sm:text-sm">
									Code
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="block text-white p-6 rounded-lg shadow-lg bgMulti w-64 h-cardHs sm:w-80 sm:h-cardH ml-4 mr-4 mb-10">
					<div className=" flex flex-col items-center text-base mb-4">
						<h1 className=" text-lg sm:text-xl mb-4">Personal website</h1>
						<img src={img7} alt="Personal-site" height={200} width={200} />
						<p className="text-xs sm:text-sm mt-4 mb-4 ml-5 mr-5 text-center">
							My personal website
						</p>

						<div className="flex flex-row absolute mt-buttonsT">
							<a
								href="https://mattmazer.dev"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton mr-2 text-xs sm:text-sm">
									Site
								</button>
							</a>

							<a
								href="https://github.com/mattmazer1/Personal-website"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="cardButton ml-2 text-xs sm:text-sm">
									Code
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className="block text-white p-6 rounded-lg shadow-lg bgMulti w-64 h-cardHs sm:w-80 sm:h-cardH ml-4 mr-4 mb-10">
					<div className=" flex flex-col items-center text-base mb-4">
						<h1 className=" text-lg sm:text-xl mb-4">Other:</h1>

						<a
							href="https://github.com/mattmazer1/ERC1155-contract"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="text-xs sm:text-base mb-5 sm:mb-4 ml-5 mr-5 text-center hover:text-blue-700">
								<u>Multi-feature ERC1155 contract</u>
							</p>
						</a>

						<a
							href="https://github.com/mattmazer1/Merge-contract"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="text-xs sm:text-base mb-5 sm:mb-4 ml-5 mr-5 text-center hover:text-blue-700">
								<u>NFT merge contract</u>
							</p>
						</a>

						<a
							href="https://github.com/mattmazer1/DAO-contract"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="text-xs sm:text-base mb-5 sm:mb-4 ml-5 mr-5 text-center hover:text-blue-700">
								<u>DAO contracts</u>
							</p>
						</a>

						<a
							href="https://github.com/mattmazer1/Twitter-bot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="text-xs sm:text-base mb-5 sm:mb-4 ml-5 mr-5 text-center hover:text-blue-700">
								<u>Twitter bot</u>
							</p>
						</a>

						<a
							href="https://github.com/mattmazer1/Discord-bot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="text-xs sm:text-base mb-5 sm:mb-4 ml-5 mr-5 text-center hover:text-blue-700">
								<u>Discord bot</u>
							</p>
						</a>

						<a
							href="https://github.com/mattmazer1/Multisig-wallet"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="text-xs sm:text-base mb-5 sm:mb-4 ml-5 mr-5 text-center hover:text-blue-700">
								<u>Multisig-wallet contract</u>
							</p>
						</a>

						<a
							href="https://github.com/mattmazer1/ERC721A"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p className="text-xs sm:text-base mb-5 sm:mb-4 ml-5 mr-5 text-center hover:text-blue-700">
								<u>Dynamic ERC721A contract</u>
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
