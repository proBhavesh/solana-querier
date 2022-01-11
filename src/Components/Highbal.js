import React, { useEffect, useState } from "react";
import { accountWithHightestBal } from "../APIs/APIcaller.js";

const Highbal = () => {
	const [data, setData] = useState();
	useEffect(() => {
		const mnfn = async () => {
			const dta = await accountWithHightestBal();
			setData(await dta.data);
			console.log("from highbal", await dta.data.data.solana);
			// console.log(await dta.data.data.solana.blockRewards);
		};
		mnfn();
	}, []);
	console.log(data);

	if (data === undefined) {
		return (
			<React.Fragment>
				<div className="loading-animation">
					<h1>Loading </h1>
				</div>
			</React.Fragment>
		);
	} else {
		console.log("from highbal", data);
		return (
			<>
				<div>High Bal</div>
				{/*	<div>
					{data.data.solana.blockRewards.map((res1) => (
						<div>
							<div>Hash => {res1.hash}</div>
							<div>Amount => {res1.amount}</div>
						</div>
					))}
				</div>*/}
			</>
		);
	}
};

export default Highbal;
// what is the full form
