import {ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';



export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductState>('products');

// pizzas state
export const getPizzazState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzazState, fromPizzas.getPizzas);
export const getAllPizzasLoaded = createSelector(getPizzazState, fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector(getPizzazState, fromPizzas.getPizzasLoading);
