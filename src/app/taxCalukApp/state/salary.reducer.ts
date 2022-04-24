import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { averageTax, basicTax, highTax } from "./salary.action";
import { initialState1 } from "./salary.state";

const _salaryReducer = createReducer(
    initialState1,
    on(highTax, (state) => {
        return {
            ...state,
            salary :  100000
        }
    }),
    on(averageTax, (state) => {
        return {
            ...state,
            salary :  50000
        }
    }),
    on(basicTax, (state) => {
        return {
            ...state,
            salary :  28000
        }
    })
    )

export function salaryReducer(state: any, action: any){
    return _salaryReducer(state, action);
}