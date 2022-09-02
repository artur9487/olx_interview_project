/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer1 } from './reducer';

export const store = configureStore({ reducer: reducer1 });
