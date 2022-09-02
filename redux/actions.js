/** @format */ import {
	FILTER_PRODUCT,
	SET_FILTER_CREDENTIALS,
	SET_USER
} from './types';

export const setFilterCredentials = (
	lowCost,
	upperCost,
	specificValue,
	category
) => ({
	type: SET_FILTER_CREDENTIALS,
	payload: { lowCost, upperCost, specificValue, category }
});

export const setUser = (user) => ({
	type: SET_USER,
	payload: user
});

export const filterProducts = {
	type: FILTER_PRODUCT
};
