import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";

//Configuracion base
import {GLOBAL} from "src/app/services/global";
import {User} from "src/app/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;
  public identity;
  public token;

  constructor(public http: HttpClient) {

        this.url = GLOBAL.url;
  }

  registerUser(user: User) {
    //Convertimos a un string el objeto de usuario
    let json = JSON.stringify(user);

    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    /*
    * 1 url del servicio
    * 2 parametros en json o string
    * 3 headers en json
    * */
    return this.http.post(this.url + 'register', params, {headers});

  }

  loginUser(user: User, gettoken = false) {

    //Si queremos obtener el tocken le pasamos un true a esta funcion
    if (gettoken) {
      user.gettoken = 'true';
    }

    //Convertimos a un string el objeto de usuario
    let json = JSON.stringify(user);

    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.url + 'login', params, {headers});

  }


  getIdentityLocal() {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if (identity != "undefined") {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }

  getTokenLocal() {

    let token = localStorage.getItem('token');

    if (token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }


  removeSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('identity');
    this.getIdentityLocal();
    this.getTokenLocal();
  }

}
