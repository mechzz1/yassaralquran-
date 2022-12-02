import { TokenStorageService } from "./token-storage.service";
import { LoginInfo } from "./../models/login-info";
// import { User } from './../models/user';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { JwtResponse } from "./jwt-response";
import { environment } from "src/environments/environment";
/**
 * it is a variable of constant type that defines the api of request header and also get the meta data
 */
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Accept: "application/json",
    // "Access-Control-Allow-Origin": "https://sms.innovacontents.com/api/",
    "Access-Control-Allow-Origin": environment.url,
  }),
};
/**
 * It is a Decorator that marks a class as available to be provided and injected as a dependency.
 */
@Injectable({
  providedIn: "root",
})
export class AuthService {
  /**
   * It is a url of an api
   */
  private baseUrl = environment.url;

  /**
   * This is our constructor
   * @param http object of http client
   * @param tokenStorage parameter of token storage service
   */
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  /**
   * This function is used to login, it stores user login credentials
   * @param credentials this parameter stores and passes user credentials
   * @returns
   */
  public authenticate(credentials: LoginInfo): Observable<JwtResponse> {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
      }),
    };
    return this.http.post<JwtResponse>(
      `${this.baseUrl}/users/login`,
      credentials,
      httpOptionsSaved
    );
  }
  public signUp(credentials: LoginInfo): Observable<JwtResponse> {
    const httpOptionsSaved = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": `${this.baseUrl}`,
        "access-token": this.tokenStorage.getToken(),
      }),
    };
    return this.http.post<JwtResponse>(
      `${this.baseUrl}/users/register`,
      credentials,
      httpOptionsSaved
    );
  }
  // /**
  //  * This function is used to sign up user, it stores user sign up credentials
  //  * @param credentials this parameter stores and passes user credentials
  //  * @returns
  //  */
  // public signUp(credentials: LoginInfo): Observable<JwtResponse> {
  //   debugger;
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": `${this.baseUrl}`,
  //       "x-access-token": this.tokenStorage.getToken(),
  //     }),
  //   };
  //   return this.http.post<JwtResponse>(
  //     `${this.baseUrl}/users/register`,
  //     credentials,
  //     httpOptionsSaved
  //   );
  // }
}
