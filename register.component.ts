import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  signupUsers:any = [];
  submit = false;
  loading = false;
  visible:boolean = true;
  visible1:boolean = true;
  changetype:boolean = true;
  changetype1:boolean = true;

  signupObj:any = { 
    name : "" , 
    email : "" , 
    password : "",
    confirmPassword : ""
  };

  onSubmit(){
    this.loading = true;
  }

  viewPass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  viewPass1(){
    this.visible1 = !this.visible1;
    this.changetype1 = !this.changetype1;
  }
  

}
