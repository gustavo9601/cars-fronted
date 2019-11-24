import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {User} from "src/app/models/user";
import {UserService} from "src/app/services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string;
  public user: User;
  public status: string;
  public mensaje: any;
  public token;
  public identity;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _userService: UserService) {

    this.logout(); //cierra sesion si se envia el parametro /1

    this.title = 'Identificate'
    this.resetUser();
  }

  ngOnInit() {
    console.log("login.component started");
  }

  resetUser() {
    this.user = new User(1, "ROLE_USER", "", "", "", "");
  }

  onSubmit(formulario) {
    console.log(this.user);


    this._userService.loginUser(this.user).subscribe(
      (respuesta: any) => {

        console.log(respuesta);

        //Veriricamos si viene el status y si viene con error, no debe continuar
        if (respuesta.status != 'error') {
          this.status = 'success';

          //Conseguir el token
          this.token = respuesta;
          localStorage.setItem('token', this.token);

          //Objeto del usuario identificado, hacemos la misma peticion pero con gettoken en true

          this._userService.loginUser(this.user, true).subscribe(
            (respuesta: any) => {

              this.identity = respuesta;
              localStorage.setItem('identity', JSON.stringify(this.identity));

              //Redireccion
              this.router.navigate(['/']);

            },
            (error) => {
              console.log(<any>error);
            }
          );
        }else{
          this.status = 'error';
          this.mensaje = 'Credenciales invalidas';
        }


      },
      (error) => {
        this.status = 'error';
        this.mensaje = <any>error;
      }
    )

  }


  logout() {

    this.route.params.subscribe(
      (parametros) => {
        let logout = +parametros['sure'];


        if (logout == 1) {
          //Serrando sesion
          this._userService.removeSesion();

          this.identity = null;
          this.token = null;

          this.router.navigate(['/home']);

        }
      }
    )

  }

}
