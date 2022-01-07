import React, { useEffect, useState } from "react";
import { blockData } from "../APIs/APIcaller.js";

const Header = () => {
	const [data, setData] = useState();
	useEffect(async () => {
		const dta = await blockData();
		setData(await dta.data);
		console.log(await dta.data.data.solana.blockRewards);
	}, []);
	console.log(data);

	if (data == undefined) {
		return (
			<React.Fragment>
				<div className="loading-animation">
					<h1>Loading </h1>
				</div>
			</React.Fragment>
		);
	} else {
		console.log(typeof state);

		return (
			<>
				{/*				<div>${data.map((reward) => reward.hash)}</div>*/}
				<div>
					{data.data.solana.blockRewards.map((res1) => (
						<div>
							<div>Hash => {res1.hash}</div>
							<div>Amount => {res1.amount}</div>
						</div>
					))}
				</div>
			</>
		);
	}
};

export default Header;
// what is the full form
