import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  implements OnInit{
  

  @Input() user! : user
  constructor(){}
  ngOnInit(): void {

  }
  onSignup(): void {

  }
  onLogin(): void {

  }
  

}
