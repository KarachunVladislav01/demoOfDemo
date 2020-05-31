import React from "react";
import {useSelector} from "react-redux";
import "../assets/stylesheet/progressBar.css";

const Range = (props) => {
	return (
		<div
			className="progress-rate"
			style={{
				width: `${props.percentRange}%`,
			}}
		></div>
	);
};

export default function ProgressBar() {
	const percentRange = useSelector((state) => state.percentRange);
	return (
		<div className="progress-bar">
			<Range percentRange={percentRange} />
		</div>
	);
}
