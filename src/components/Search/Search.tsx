import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
	const [selected, setSelected] = useState(0);

	const options = [
		{ id: 0, name: "All" },
		{ id: 1, name: "Mainnet" },
		{ id: 2, name: "Testnet" },
		{ id: 3, name: "Upcoming" },
	];

	return (
		<div className="mt-10">
			<div className="flex justify-between gap-12">
				<div className="border w-full gap-2 overflow-hidden rounded-full border-black/60 flex items-center text-gray-600 px-2 text-lg">
					<div className="text-2xl">
						<BiSearchAlt />
					</div>
					<input
						className="w-96 outline-none p-1 flex items-center"
						placeholder="chain name"
					/>
				</div>
				<div className="flex w-full  max-w-sm font-mono hover:border-black overflow-hidden items-center text-base border justify-between rounded-full">
					{options.map((option) => {
						return (
							<div
								onClick={() => setSelected(option.id)}
								className={`${
									selected === option.id
										? "bg-gray-800 text-white"
										: "bg-white text-gray-800"
								} w-full cursor-pointer transition-all duration-300 h-full flex items-center justify-center`}
							>
								{option.name}
							</div>
						);
					})}
				</div>
				<div className="font-mono w-full max-w-fit items-center flex">
					30 chain(s)
				</div>
			</div>
			<div className="text-2xl font-bold font-mono mt-10">
				{options[selected].name}
			</div>
		</div>
	);
};

export default Search;
