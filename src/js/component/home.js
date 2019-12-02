import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container mt-5">
			<div className="box">
				<div className=" luz verde" />
				<div className="luz amarillo" />
				<div className="luz rojo" />
			</div>
			<div className="poste" />
		</div>
	);
}
