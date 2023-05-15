import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private activeRoute :ActivatedRoute) { }
// onRegister: any;
onRegister() {
  this.router.navigate(['/register']);
}

};

