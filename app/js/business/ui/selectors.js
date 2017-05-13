import { selectProperty } from 'js/helpers/redux';
import { UI_STATE_KEY } from 'js/constants/reducerKeys';
import { asyncSelector } from 'js/helpers/asyncActions/selectors';
import { ASYNC_EX } from 'js/constants/asyncActions';

export const selD = selectProperty([UI_STATE_KEY, 'd'], null);
export const selAsyncEx = asyncSelector(ASYNC_EX);
