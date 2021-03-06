import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponseData } from "../models/AuthResponseData.model";
import { User } from "../models/user.model";

@Injectable({
    providedIn : 'root'
})

export class AuthService {
    constructor(private http : HttpClient) {}

    login(email: string, password: string) : Observable<AuthResponseData> {
        return this.http.post <AuthResponseData>
            (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FiREBASE_API_KEY}`,
                { email, password, returnSecureToken: true }
            );
    }

    formatUser(data : AuthResponseData){
        const expirationDate = new Date(new Date().getTime() +  +data.expiresIn * 1000)
        const user = new User(data.email, data.idToken, data.localId, expirationDate);
        return user;
    }

    getErrorMessage(message : string){
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                return 'EMAIL_NOT_FOUND';

            case 'INVALID_PASSWORD':
                return 'INVALID_PASSWORD';
              
            default:
                return 'Unknown error occured: please try again'
        }
    }

}