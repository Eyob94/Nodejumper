import React from "react";
import { BsTwitter, BsGithub, BsTelegram } from "react-icons/bs";
import { IconContext } from "react-icons/lib/esm/iconContext";

const Navbar = () => {
	return (
		<div className="mb-4">
			<div className="items-center flex border-b py-2 justify-between">
				<div className="font-bold text-2xl flex items-center gap-2">
					<div className="scale-90">
						<img src="/logo.png" />
					</div>
					<div className="text-gray-700 font-mono">Nodejumper</div>
				</div>
				<div className="flex gap-4 text-gray-700 text-3xl">
					<div className="w-8 flex items-center rounded-full overflow-hidden">
						<img src="/ukraine.png" className="rounded-full scale-150" />
					</div>
					<div>
						<IconContext.Provider value={{}}>
							<BsTwitter />
						</IconContext.Provider>
					</div>
					<div>
						<IconContext.Provider value={{}}>
							<BsGithub />
						</IconContext.Provider>
					</div>
					<div>
						<IconContext.Provider value={{}}>
							<BsTelegram />
						</IconContext.Provider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
