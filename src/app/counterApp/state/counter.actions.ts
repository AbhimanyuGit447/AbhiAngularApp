import { createAction, createFeatureSelector, props } from "@ngrx/store";

export const increment = createAction('increment');

export const decrement = createAction('decrement');

export const reset = createAction('reset');

export const input = createAction('input', 
props<{value : number}>()
);

export const channelName = createAction('changeName');