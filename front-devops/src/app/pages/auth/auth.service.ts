import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    AUTH_KEY = "auth_token";
    USER_KEY = "user_key";
   
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem(this.AUTH_KEY);
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem(this.AUTH_KEY, token);
    } else {
      window.localStorage.removeItem(this.AUTH_KEY);
    }
  }


  request(method: string, url: string, data: any): Promise<any> {
      let headers: any = {};

      if (this.getAuthToken() !== null) {
          headers = {"Authorization": "Bearer " + this.getAuthToken()};
      }

      return axios({
          method: method,
          url: url,
          data: data,
          headers: headers
      });
  }


  public saveUser(user: any): void {
    window.localStorage.removeItem(this.USER_KEY);
    window.localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

    public getUser(): any {
      if (typeof window !== "undefined") {
        const user = window.localStorage.getItem(this.USER_KEY);
        if (user) {
          return JSON.parse(user);
        }
      }
      
      return null;
    }

    public isLoggedIn(): boolean {
      if (typeof window !== "undefined") {
        const user = window.localStorage.getItem(this.AUTH_KEY);
        if (user) {
          return true;
        }
      }
     
      return false;
    }

    clean(): void {
      window.localStorage.clear();
    }
}