import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastController:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      name:['',[Validators.required]],
      surname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]]
    })
  }

  register(){
    if(this.registerForm.valid){
      let registerModel = Object.assign({},this.registerForm.value);
      this.authService.register(registerModel)
        .subscribe(response=>{
          this.presentToast("Registered Successfull");
          this.router.navigate(['login']);
        },responseErr=>{
          this.presentToast(responseErr.error.error)
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
