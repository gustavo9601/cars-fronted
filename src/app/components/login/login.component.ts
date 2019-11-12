import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {

    this.title = 'Identificate'
  }

  ngOnInit() {
    console.log("login.component started");
  }

}
