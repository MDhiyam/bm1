import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private toastr:ToastrService){}

  forgotUsers:any = [];

  forgotObj:any = { 
    email : "" 
  };

  submit = false;

  onSubmit(){
    this.toastr.success("Email sent successfully! Please check your Email");
  }

}
