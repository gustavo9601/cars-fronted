import {Component, OnInit} from '@angular/core';

import {CarService} from "src/app/services/car.service";
import {Router, Params, ActivatedRoute} from "@angular/router";
import {Car} from "src/app/models/car";
import {UserService} from "src/app/services/user.service";

@Component({
  selector: 'app-car-edit',
  templateUrl: '../car-new/car-new.component.html',
})
export class CarEditComponent implements OnInit {

  public car: Car;
  public page_title: string;
  public token: string;
  public status_car: string;


  constructor(private router: Router,
              private route: ActivatedRoute,
              public _carService: CarService,
              private _userService: UserService,) {
    this.page_title = 'Editar carro';
    this.token = this._userService.getTokenLocal();
  }

  ngOnInit() {
    this.getOneCar();
  }


  getOneCar() {

    this.route.params.subscribe(
      (parametros) => {

        let id = +parametros['id'];

        this._carService.getOneCar(id).subscribe(
          (respuesta: any) => {
            console.log(respuesta);

            if (respuesta.status = 'success') {
              this.car = respuesta.car;
              this.page_title = 'Editar carro ' + respuesta.car.title;
            }


          }, (error) => {
            console.log(<any>error);
          }
        );


      },
      (error) => {
        console.log("No obtuvo parametros por la url", <any>error);
      }
    )


  }


  onSubmit(form) {
    this._carService.updateCar(this.token, this.car, this.car.id).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        if (respuesta.status == 'success') {
          this.status_car = 'success';
          this.car = respuesta.car;
          this.router.navigate(['/car', this.car.id]);
        } else {
          this.status_car = 'error';
        }

      }, (error) => {
        console.log(<any>error);
      }
    )
  }

}
