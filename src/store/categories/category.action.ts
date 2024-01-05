import {Action, ActionWithPayload, createAction, withMatcher,} from './../../utils/reducers/reducer.utils';
import {CATEGORIES_ACTION_TYPES, Category} from './category.types';
//import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export type FetchCategoriesStartType =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type fetchCategoriesSuccessType = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type fetchCategoriesFailedType = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStartType
  | fetchCategoriesSuccessType
  | fetchCategoriesFailedType;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStartType =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher( (
  categoriesArray: Category[],
): fetchCategoriesSuccessType =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray,
  ));

export const fetchCategoriesFailed = withMatcher((
  error: Error,
): fetchCategoriesFailedType =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));
