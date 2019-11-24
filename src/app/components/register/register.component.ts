import { Component, OnInit } from '@angular/core';
import {User} from "src/app/models/user";

//Servicio
import {UserService} from "src/app/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public title:string;
  public user: User;
  public status: string;
  public mensaje:string;

  constructor(public _userService:UserService) {
    this.title = 'Registrate';

    this.resetUser();

  }

  ngOnInit() {
  }


  resetUser(){
    this.user = new User(1, "ROLE_USER", "", "", "", "");
  }

  onSubmit(formulario){
    console.log(this.user);

    this._userService.registerUser(this.user).subscribe(
      (respuesta:any) => {

        this.mensaje = respuesta.message;
        console.log(respuesta);

        if(respuesta.status == 'success'){
          //Respuesta del servicio y se creo correctamnete
          this.status = respuesta.status;

          this.resetUser();
          formulario.reset();  //reseteamos el formulario recibido

        }else{
          //Error al crear
          this.status = 'error';

        }

      },
      (error) => {
        console.error(<any>error);
      }
    )

  }
}
