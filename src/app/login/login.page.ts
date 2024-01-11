import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    mail: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
  });

  docente = "dcares";
  // alumno = "";
  pass= "12345";
  mail= "dcares@duoc.cl";
  valido = false;


  login(){
    //crear object navegation extras
    let nav : NavigationExtras = {
      state: {
        user: this.usuario.value.user,
        pass: this.usuario.value.pass,
        mail: this.usuario.value.mail,
      }
    };

    console.log(this.usuario.value.user);
    if (this.usuario.value.user == this.docente){
      this.router.navigate(['/home'], nav);
    }

    // else if (this.usuario.value.user == this.alumno){
    //   this.router.navigate(['/qr']);

    // }
    else {
      this.presentAlert();
      }
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }



  constructor(private router: Router, private alertController: AlertController) { }

  // navigate(){
  //   if (localStorage.getItem('token') == null) {
  //     this.router.navigate(['login']);
  //   }
  //   this.router.navigate(['qr']);
  // }

  ngOnInit() {
  }

}
