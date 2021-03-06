import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counterApp/state/counter.reducer";
import { CounterState } from "../counterApp/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";


export interface AppState {
    [SHARED_STATE_NAME] : SharedState
    [AUTH_STATE_NAME] : AuthState;

}

export const appReducer = {
    [SHARED_STATE_NAME] : SharedReducer,
    [AUTH_STATE_NAME] : AuthReducer,

}