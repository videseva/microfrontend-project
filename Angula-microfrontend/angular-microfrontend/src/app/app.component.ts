import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();

  constructor(private userServices: UserService) {
  }
  ngOnInit() {

  }

  saveUser() {
    console.log("Usuario: ", this.user)
    this.userServices.post(this.user).subscribe(result => {
      alert("Usuario Registado")
    });
  }

}
