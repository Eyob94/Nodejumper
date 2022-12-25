import React from "react";

const Card = () => {
	return (
		<div>
			<div>
				<div className="w-60 h-68 hover:h-72 gap-2 pt-6 cursor-pointer bg-white border overflow-hidden flex flex-col items-center p-6 border-gray-300 group hover:border-gray-700 rounded-lg">
					<div className="flex flex-col relative items-center top-4 group-hover:top-0 gap-2 transition-all duration-200">
						<div>
							<img src="/bit.png" />
						</div>
						<div className="font-bold text-xl font-mono">Bitcanna</div>
						<div className="font-mono">bitcanna-1</div>
					</div>
					<div className="font-mono mt-4 flex opacity-0 gap-1 transition-all duration-200 group-hover:top-0 group-hover:opacity-100 relative top-4 ">
						<div className="border hover:bg-red-50 border-black/25 text-xs hover:border-black/60 p-1 rounded-md">
							install
						</div>
						<div className="border hover:bg-red-50 border-black/25 text-xs hover:border-black/60 p-1 rounded-md">
							sync
						</div>
						<div className="border hover:bg-red-50 border-black/25 text-xs hover:border-black/60 p-1 rounded-md">
							cheat-sheet
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
