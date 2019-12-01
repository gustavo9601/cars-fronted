import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute, Params} from "@angular/router";

//Service
import {UserService} from "src/app/services/user.service";
import {CarService} from "src/app/services/car.service";
//Model
import {User} from "src/app/models/user";
import {Car} from "src/app/models/car";

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.css']
})
export class CarNewComponent implements OnInit {

  public page_title: string;
  public identity: string;
  public token: string;
  public car: Car;
  public status_car: string;

  constructor(private _userService: UserService,
              private _carService: CarService,
              private router: Router,
              private route: ActivatedRoute) {

    this.page_title = 'Crear nuevo coche';
    this.identity = this._userService.getIdentityLocal();
    this.token = this._userService.getTokenLocal();
  }

  ngOnInit() {
    //Verificacion de inicio de secion si la identidad local exite
    if (this.identity == null) {
      this.router.navigate(['/login']);
    } else {
      this.car = new Car(1, 'Test', 'test des', 1, '', null, null);
    }
  }


  onSubmit(formulario) {
    console.log(this.car);

    this._carService.create(this.token, this.car).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        if (respuesta.status == 'success') {
          this.status_car = 'success';
          this.car = respuesta.car;
          this.router.navigate(['/home']);
        } else {
          this.status_car = 'error';
        }




      },
      (error) => {
        console.log(<any>error);

        this.status_car = 'error';

      }
    )

  }


}


