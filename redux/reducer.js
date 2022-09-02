/** @format */

import { FILTER_PRODUCT, SET_FILTER_CREDENTIALS } from './types';
import { SET_USER } from './types';
import { products } from '../products';

const INITIAL_STATE = {
	user: '',
	category: '',
	lowCost: 0,
	upperCost: 0,
	specificValue: '',
	chosenProducts: []
};

export const reducer1 = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_FILTER_CREDENTIALS:
			const { lowCost, upperCost, specificValue, category } = action.payload;
			return { ...state, lowCost, upperCost, specificValue, category };
		case SET_USER:
			return { ...state, user: action.payload };
		case FILTER_PRODUCT:
			const newProducts = products.filter((item) => {
				console.log(item, state);
				return (
					item.category === state.category &&
					item.type === state.specificValue &&
					item.cost >= state.lowCost &&
					item.cost <= state.upperCost
				);
			});
			return { ...state, chosenProducts: newProducts };
		default:
			return state;
	}
};
