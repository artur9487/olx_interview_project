/** @format */ import {
	SET_CATEGORY,
	SET_FILTER_CREDENTIALS,
	SET_USER
} from './types';

export const setFilterCredentials = (lowCost, upperCost, specificValue) => ({
	TYPE: SET_FILTER_CREDENTIALS,
	payload: { lowCost, upperCost, specificValue }
});

export const setUser = (user) => ({
	TYPE: SET_USER,
	payload: user
});

export const setCategory = (category) => ({
	TYPE: SET_CATEGORY,
	payload: category
});
