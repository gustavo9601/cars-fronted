import {Injectable} from '@angular/core';
import {Car} from "src/app/models/car";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {GLOBAL} from "src/app/services/global";


@Injectable({
  providedIn: 'root'
})
export class CarService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  create(token, car: Car) {
    let json = JSON.stringify(car);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    return this.http.post(this.url + 'cars', params, {headers: headers});


  }

  getAllCars() {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get(this.url + 'cars', {headers: headers});
  }

  getOneCar(id) {
    return this.http.get(this.url + 'cars/' + id);
  }

  updateCar(token, car, id) {

    let json = JSON.stringify(car);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    let params = "json=" + json;

    return this.http.put(this.url + 'cars/' + id, params, {headers: headers});

  }


  deleteCar(token, id) {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    return this.http.delete(this.url + 'cars/' + id, {headers: headers});
  }

}
