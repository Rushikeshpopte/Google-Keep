import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  signinForm!: FormGroup;
     submitted = false;

  constructor(private formBuilder:FormBuilder,
    private userService:UserService
    ){}

  ngOnInit() {
    this.signinForm =this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
     
  });
}

onsubmit() {
  this.submitted=true;
  
  if (this.signinForm.valid) {
    console.log('onsubmit function called', this.signinForm.value);
    let data = {
      email: this.signinForm.value.email,
      password: this.signinForm.value.password,
      
    };

    this.userService.login(data).subscribe((response:any)=>{
      console.log('Sign is called', response);
      localStorage.setItem("token", response.id)
    })
  }
}
}




