// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../custom-validations/userName.validator';
import { ConfirmPasswordValidator } from '../custom-validations/confirmPassword.validator';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


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

// // };




// export class LoginComponent implements OnInit {
// Password: any;

//   constructor(private fb:FormBuilder, private router: Router, private activeRoute :ActivatedRoute) { }
//   onRegister() {
//     this.router.navigate(['/register']);
//   }
  
//   registerationForm=this.fb.group({

//     Password :['', [Validators.required,Validators.minLength(5),ForbiddenNameValidator]],
//     email:[''],
//     subscribe:[false],
//     alternativeEmails:this.fb.array([]),
  
//     })
//   },

//   get Password()
//   {
//     return this.registerationForm.get('Password');
//   }

//   get email()
//   {
//     return this.registerationForm.get('email');
//   }

 

//   ngOnInit(): void {
//   }



//   setEmailValidator()
//   {
//     this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
//       if(checkedValue)
//       {
//         this.email?.setValidators(Validators.required);
//       }
//       else
//       {
//         this.email?.clearValidators();
//       }
//       this.email?.updateValueAndValidity();
//     })
//   }

// }

// function Password() {
//   throw new Error('Function not implemented.');
// }


// function email() {
//   throw new Error('Function not implemented.');
// }

// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }




// function setEmailValidator() {
//   throw new Error('Function not implemented.');
// }
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute) {}

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

  ngOnInit(): void {}
  
  onRegister() {
    this.router.navigate(['/register']);
  }
}