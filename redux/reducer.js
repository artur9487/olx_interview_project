/** @format */

import { SET_CATEGORY, SET_FILTER_CREDENTIALS } from './types';
import { SET_USER } from './types';

const INITIAL_STATE = {
	user: '',
	category: '',
	lowCost: 0,
	upperCost: 0,
	specificValue: ''
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_FILTER_CREDENTIALS:
			const { lowCost, upperCost, specificValue } = action.payload;
			return { ...state, lowCost, upperCost, specificValue };
		case SET_USER:
			const { user } = action.payload;
			return { ...state, user };
		case SET_CATEGORY:
			const { category } = action.payload;
			return { ...state, category };
		default:
			return state;
	}
};
