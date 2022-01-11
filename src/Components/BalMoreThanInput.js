import React, { useEffect, useState } from "react";
import { accountSolBalance } from "../APIs/APIcaller.js";

const BalMoreThanInput = () => {
	const [balance, setBalance] = useState();
	useEffect(
		(balance) => {
			const mnfn = async () => {
				const dta = await accountSolBalance(balance);
				console.log(dta);
				// console.log("from highbal", await dta.data.data.solana);
				// console.log(await dta.data.data.solana.blockRewards);
			};
			mnfn();
		},
		[balance]
	);
	// console.log(data);

	if (balance == !undefined) {
		return (
			<React.Fragment>
				<div className="loading-animation">
					<h1>Loading </h1>
				</div>
			</React.Fragment>
		);
	} else {
		return (
			<>
				<div>High Bal</div>
				<div>
					<input
						type="number"
						onChange={(e) => {
							setBalance(e.target.value);
						}}
					/>
				</div>
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

export default BalMoreThanInput;
// what is the full form
