import {Component, OnInit} from '@angular/core';

//Service
import {CarService} from "src/app/services/car.service";
import {Car} from "src/app/models/car";
import {UserService} from "src/app/services/user.service";
import {User} from "src/app/models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cars: Array<Car>;
  public token: string;
  public status_delete: string;
  public message_delete: string;

  constructor(private _carService: CarService,
              private _userService: UserService) {
  }

  ngOnInit() {
    this.token = this._userService.getTokenLocal();
    this.loadCars();
  }

  loadCars() {
    this._carService.getAllCars().subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        if (respuesta.status = 'success') {
          this.cars = respuesta.cars;
        }

      }, (error) => {
        console.log(<any>error);
      }
    );
  }


  deleteCar(id) {
    this._carService.deleteCar(this.token, id).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        if (respuesta.status == 'success') {
          this.status_delete = 'success';
          this.message_delete = respuesta.message;
          this.loadCars();
        } else {
          this.status_delete = 'error';
          this.message_delete = respuesta.message;
        }

      }, (error) => {
        console.log(error);

        this.status_delete = 'error';
        this.message_delete = 'Error al intentar eliminar';
      }
    )

  }


}
