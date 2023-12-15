import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    // Check localStorage to see if the user should be remembered
    const rememberMeStored = localStorage.getItem('rememberMe');
    this.rememberMe = rememberMeStored === 'true';
  }

  loginUsers:any = [];

  submit = false;
  loading = false;
  visible:boolean = true;
  changetype:boolean = true;
  rememberMe: boolean = false;


  loginObj:any = { 
    email : "" , 
    password : ""
  };

  onSubmit(){
    this.loading = true;

    // If login is successful and "Remember Me" is checked
    if (this.rememberMe) {
      // Store a token or a flag in localStorage
      localStorage.setItem('rememberMe', 'true');
    }
  }

  viewPass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

}
