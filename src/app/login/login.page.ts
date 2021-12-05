import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private toastController:ToastController,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:['eve.holt@reqres.in',[Validators.required,Validators.email]],
      password:['cityslicka',[Validators.required,Validators.minLength(5)]]
    })
  }
  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value);
      this.authService.login(loginModel)
        .subscribe(response=>{
          this.presentToast("Loggining...");
          this.authService.isLogin=true;
          this.router.navigate(['home'])
        },responseErr=>{
          this.presentToast(responseErr.error.error);
        })
    }
  }


  async presentToast(message:string) {
    const toast = await this.toastController.create({
      position:"top",
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
