import React, { useState } from "react";

const Info = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="bg-red-50 rounded-lg p-4 font-mono">
			{!show ? (
				<div className=" w-full flex justify-between">
					<div>Validation has never been so easy yet ...</div>
					<div
						onClick={() => setShow(true)}
						className="cursor-pointer hover:underline"
					>
						{" "}
						Who we are?
					</div>
				</div>
			) : (
				<div>
					<div className=" w-full flex justify-between">
						<div>
							Welcome to Nodejumper's multi tool for cosmos based networks!
						</div>
						<div
							onClick={() => setShow(false)}
							className="cursor-pointer hover:underline"
						>
							{" "}
							Got it
						</div>
					</div>
					<div className="flex flex-col gap-4 mt-4">
						<p>Developing by Nodejumper with love</p>
						<p>
							Nodejumper web app is a multi tool for cosmos based networks. It
							provides a whole bunch of helpful support features for cosmos
							blockchains. It's built on dedicated server infrastructure with
							advanced monitoring and alerting system on top of it. Nodejumper
							supports more than 20 networks and the number is constantly
							growing.
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Info;
