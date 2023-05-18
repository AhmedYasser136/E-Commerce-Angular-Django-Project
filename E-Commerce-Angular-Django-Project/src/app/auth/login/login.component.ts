// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../custom-validations/userName.validator';
import { ConfirmPasswordValidator } from '../custom-validations/confirmPassword.validator';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// // export class LoginComponent {
//   // constructor(private router: Router, private activeRoute :ActivatedRoute) { }
// // onRegister: any;
// // onRegister() {
// //   this.router.navigate(['/register']);
// // }


export class LoginComponent implements OnInit {
  [x: string]: any;
  data: any=[];
  constructor(private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute, AuthService: AuthService, private http: HttpClient) { }

  registerationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), ForbiddenNameValidator]],
  });

  get email() {
    return this.registerationForm.get('email');
  }

  get password() {
    return this.registerationForm.get('password');
  }

  ngOnInit() {
    this['AuthService'].getData().subscribe(
      (data: any) => {
        this.data = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    const url = 'http://localhost:8000/';
    const formData = new FormData();
    formData.append('name', this['formData'].name);
    formData.append('email', this['formData'].email);
    this['http'].post(url, formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    );
  }
}

