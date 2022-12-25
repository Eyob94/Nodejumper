import React from "react";
import Card from "./Card";

const Cards = () => {
	return (
		<div className="mt-6">
			<div>
				{Array.from({ length: 1 }).map(() => {
					return <Card />;
				})}
			</div>
		</div>
	);
};

export default Cards;
