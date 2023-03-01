import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';


@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrls:[ './registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  showPassword: boolean = false;
  

  

  constructor(private formBuilder:FormBuilder, private userService:UserService){}

  ngOnInit() {
    this.registerForm =this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
  });
}

onsubmit() {
  if (this.registerForm.valid) {
    console.log('onsubmit function called', this.registerForm.value);
    let signUpdata = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword,
      service:'advance'
    };

    this.userService.registration(signUpdata).subscribe((response:any)=>{

    
    console.log ('signup successfull' , response);
  });

   


  }

}


showHidePassword() {
  this.showPassword = !this.showPassword;
}
}
