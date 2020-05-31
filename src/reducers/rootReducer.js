import {
	FIRST_DEPOSIT,
	WIN_EXPRESS_BET,
	WIN_BET_IN_DOTA,
	EXPERIENCE_UP,
} from "../Actions";

const initialState = {
	percentRange: 0,
	firstQuestDone: false,
	secondQuestDone: false,
	thirdQuestDone: false,
};

const updatePercentRange = (state, action) => {
	const persent = action.payload;
	if (state.percentRange + persent >= 100) return {...state, percentRange: 100};
	else {
		return {...state, percentRange: state.percentRange + persent};
	}
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case FIRST_DEPOSIT: {
			if (!state.firstQuestDone) {
				return {...state, firstQuestDone: !state.firstQuestDone};
			}
		}
		case WIN_EXPRESS_BET: {
			if (!state.secondQuestDone) {
				return {...state, secondQuestDone: !state.secondQuestDone};
			}
		}
		case WIN_BET_IN_DOTA: {
			if (!state.thirdQuestDone) {
				return {...state, thirdQuestDone: !state.thirdQuestDone};
			}
		}
		case EXPERIENCE_UP: {
			return updatePercentRange(state, action);
		}
		default:
			return state;
	}
}

export default reducer;
