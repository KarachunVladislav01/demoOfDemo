import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {
	sendTrigerUpExperience,
	sendTrigerFirstDeposit,
	sendTrigerWinExpressBet,
	sendTrigerWinBetInDota,
} from "../Actions";
import ProgressBar from "./ProgressBar";

import "../assets/stylesheet/gameScreen.css";

const BreakLine = () => {
	return (
		<div style={{position: "absolute", top: "18rem", color: "#000000"}}>
			-----------------------------------
		</div>
	);
};

export default function GameScreen() {
	const dispatch = useDispatch();
	const [thirdQuestCounter, setFirstQuestCounter] = useState(1);
	const firstQuestDone = useSelector((state) => state.firstQuestDone);
	const secondQuestDone = useSelector((state) => state.secondQuestDone);
	const thirdQuestDone = useSelector((state) => state.thirdQuestDone);

	const handleButtons = (event, persent) => {
		if (event == null) {
			return;
		}
		event.stopPropagation();
		console.log("hui");
		dispatch(sendTrigerUpExperience(persent));
	};

	const handleButtonDeposit = (event, persent) => {
		if (event == null) {
			return;
		}
		event.stopPropagation();
		dispatch(sendTrigerFirstDeposit());
	};

	const handleButtonExpress = (event, persent) => {
		if (event == null) {
			return;
		}
		event.stopPropagation();
		dispatch(sendTrigerWinExpressBet());
	};

	const handleButtonBet = (event, persent) => {
		if (event == null) {
			return;
		}
		event.stopPropagation();
		dispatch(sendTrigerWinBetInDota());
	};

	return (
		<div className="wrapper">
			<div className="container">
				<div className="wrapper-grid ">
					<ProgressBar />
				</div>
				<div className="grid-quests">
					<div className="quest-container">
						{firstQuestDone ? (
							<div className="done-wrapper">
								<h1 className="quest-done">✓ Done</h1>
							</div>
						) : (
							<div className="quest-container-grid">
								<div>
									<h1 className="quest-title">Quest</h1>
									<h2 className="quest-description">Make a first deposit</h2>
								</div>
								<BreakLine />
								<div>
									<h1 className="bonus-title">Bonus</h1>
									<h2 className="bonus-description"> + 100% to deposit</h2>
								</div>
							</div>
						)}
					</div>
					<div className="quest-container">
						{secondQuestDone ? (
							<div className="done-wrapper">
								<h1 className="quest-done">✓ Done</h1>
							</div>
						) : (
							<div className="quest-container-grid">
								<div>
									<h1 className="quest-title">Quest</h1>
									<h2 className="quest-description">
										Win a single bet in any category
									</h2>
								</div>
								<BreakLine />
								<div>
									<h1 className="bonus-title">Bonus</h1>
									<h2 className="bonus-description">One free bet</h2>
								</div>
							</div>
						)}
					</div>
					<div className="quest-container">
						{thirdQuestDone ? (
							<div className="done-wrapper">
								<h1 className="quest-done">✓ Done</h1>
							</div>
						) : (
							<div className="quest-container-grid">
								<div>
									<h1 className="quest-title">Quest</h1>
									<h2 className="quest-description">
										Win 3 times an express bet in any category
									</h2>
								</div>
								<BreakLine />
								<div>
									<h1 className="bonus-title">Bonus</h1>
									<h2 className="bonus-description">1 Buyout bet</h2>
								</div>
							</div>
						)}
					</div>
					<a
						className="trigger-action-link"
						onClick={(event) => {
							handleButtons(event, 20);
							handleButtonDeposit(event);
						}}
					>
						First deposit
					</a>
					<a
						className="trigger-action-link"
						onClick={(event) => {
							handleButtons(event, 30);
							handleButtonExpress(event);
						}}
					>
						Win an express bet
					</a>
					<a
						className="trigger-action-link"
						onClick={(event) => {
							setFirstQuestCounter(thirdQuestCounter + 1);
							console.log(thirdQuestCounter);
							if (thirdQuestCounter === 3) {
								handleButtons(event, 50);
								handleButtonBet(event);
							}
						}}
					>
						Win bet in Dota2 category
					</a>
				</div>
			</div>
			<div
				style={{width: "20rem", margin: "auto", marginTop: "4rem"}}
				id="appendTo"
			></div>
		</div>
	);
}
