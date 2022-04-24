import { counterReducer } from "../counterApp/state/counter.reducer";
import { CounterState } from "../counterApp/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";
import { salaryReducer } from "../taxCalukApp/state/salary.reducer";
import { SalarySate } from "../taxCalukApp/state/salary.state";

export interface AppState {
    counterState : CounterState;
    posts : PostsState;
    salary : SalarySate;
}

export const appReducer = {
    counter : counterReducer,
    posts : postsReducer,
    salary : salaryReducer
}