import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(private toastr:ToastrService , private router: Router){}

  resetUsers:any = [];
  visible:boolean = true;
  visible1:boolean = true;
  changetype:boolean = true;
  changetype1:boolean = true;

  resetObj:any = { 
    password : "",
    confirmPassword : ""
  };

  submit = false;

  onSubmit(){

    if(this.resetObj.password == this.resetObj.confirmPassword){
      this.toastr.success("Password changed successfully! Kindly login with user new password");
      this.router.navigate(['/']);
    }
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
