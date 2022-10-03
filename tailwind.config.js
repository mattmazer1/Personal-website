/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			margin: {
				top1: "10rem",
				topPo: "3rem",
				toph: "34.4vh",
				top2: "20vh",
				top2h: "10vh",
				exact: "0.9rem",
				buttonsT: "16.9rem",
			},
			height: {
				cardH: "22.5rem",
				cardHs: "21rem",
				baseSmh: "2.5rem",
			},

			width: {
				formW: "18rem",
				baseSmw: "2.5rem",
			},
		},
	},
	plugins: [],
};
