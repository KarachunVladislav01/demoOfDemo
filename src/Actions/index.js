export const FIRST_DEPOSIT = "FIRST_DEPOSIT";
export const WIN_EXPRESS_BET = "WIN_EXPRESS_BET";
export const WIN_BET_IN_DOTA = "WIN_BET_IN_DOTA";
export const EXPERIENCE_UP = "EXPERIENCE_UP";

export const sendTrigerFirstDeposit = () => ({
	type: FIRST_DEPOSIT,
});
export const sendTrigerWinExpressBet = () => ({
	type: WIN_EXPRESS_BET,
});
export const sendTrigerWinBetInDota = () => ({
	type: WIN_BET_IN_DOTA,
});

export const sendTrigerUpExperience = (persent) => ({
	type: EXPERIENCE_UP,
	payload: persent,
});
