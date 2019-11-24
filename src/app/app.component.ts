import {Component, DoCheck} from '@angular/core';
import {UserService} from "src/app/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  DoCheck{
  title = 'carsLaravel';

  constructor(public _userService:UserService){


  }

  //Se ejecuta cada ves que escuche algun cambio
  ngDoCheck(){
    this._userService.getIdentityLocal();
    this._userService.getTokenLocal();
  }



}
