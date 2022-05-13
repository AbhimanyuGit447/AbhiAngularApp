import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { loginStart, loginSuccess } from "./auth.actions";


@Injectable()

export class AuthEffects {
    constructor(private actions$ : Actions, private authService : AuthService, private store : Store, private router : Router) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginStart), mergeMap(action => {
           return this.authService.login(action.email, action.password).pipe(
               map((data) => {
                   this.store.dispatch(setLoadingSpinner({status : false}))
                   this.store.dispatch(setErrorMessage({message : ''}))
                console.log(data, 'yes it is my data');
                   const user = this.authService.formatUser(data);
                   return loginSuccess({ user });
                   
               }),
               catchError( (errorRes) => {
                   this.store.dispatch(setLoadingSpinner({status : false}))
                   const errorMessage = this.authService.getErrorMessage(errorRes.error.error.errors[0].message)
                   return of(setErrorMessage({message : errorMessage}));
                   
               })
           );
        }))
    })

    loginRedirect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(loginSuccess), 
                tap((action) => {
                    this.router.navigate(['/'])
                })
            )
        },
        {dispatch : false}
    )
}