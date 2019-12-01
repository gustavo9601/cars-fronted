import { Component, OnInit } from '@angular/core';

import {CarService} from "src/app/services/car.service";
import {Router, Params, ActivatedRoute} from "@angular/router";
import {Car} from "src/app/models/car";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  public car:Car;


  constructor(private router:Router,
              private route:ActivatedRoute,
              public _carService:CarService) { }

  ngOnInit() {
    this.getOneCar();
  }


  getOneCar(){

    this.route.params.subscribe(
      (parametros) => {

        let id = +parametros['id'];

        this._carService.getOneCar(id).subscribe(
          (respuesta:any) => {
            console.log(respuesta);

            if(respuesta.status = 'success'){
              this.car = respuesta.car;
            }


          },(error) => {
            console.log(<any>error);
          }
        );



      },
      (error)=>{
        console.log("No obtuvo parametros por la url", <any>error);
      }
    )


  }

}
