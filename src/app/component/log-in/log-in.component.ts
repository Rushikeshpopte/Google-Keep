import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder:FormBuilder, private userService:UserServiceService){}

  ngOnInit() {
    this.signinForm =this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
     
  });
}

onsubmit() {
  if (this.signinForm.valid) {
    console.log('onsubmit function called', this.signinForm.value);
    let data = {
      email: this.signinForm.value.email,
      password: this.signinForm.value.password,
      
    };

    this.userService.login(data).subscribe((response:any)=>{
      console.log('Sign is called', response)
    })
  }
}
}