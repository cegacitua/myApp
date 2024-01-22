import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { AuthguardGuard } from '../guards/authguard.guard';
import { AuthalumnoGuard } from '../guards/authalumno.guard';



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

  d_user = "dcares";
  d_pass= "12345";
  d_mail= "dcares@duocprofesor.cl";
  nombreDocente = "Diego";
  apellidoDocente = "Cares";

  a_user = "cgacitua";
  a_pass= "54321";
  a_mail= "ce.gacitua@duocuc.cl";
  nombreAlumno = "Cesar";
  apellidoAlumno = "Gacitua";

  valido = false;


  login(){

    console.log(this.usuario.value.user);
    if (
      this.usuario.value.user == this.d_user &&
      this.usuario.value.pass == this.d_pass &&
      this.usuario.value.mail == this.d_mail
      ){
      this.authprofesor.setAuth(true);
    }

    else if (
      this.usuario.value.user == this.a_user &&
      this.usuario.value.pass == this.a_pass &&
      this.usuario.value.mail == this.a_mail
      ){
      this.authalumno.setAuth(true);
    }

    else {
      this.presentAlert();
      return;
      }




    let tipoUsuario;
    let usuario;
    let nombre;
    let apellido;
    let clave;
    let correo;

    if (this.usuario.value && this.usuario.value.mail && this.usuario.value.mail.includes('@duocprofesor')) {
      tipoUsuario = 'profesor';
    } else {
      tipoUsuario = 'alumno';
    }


    if (tipoUsuario == 'profesor') {
        nombre = this.nombreDocente;
        usuario = this.d_user;
        apellido = this.apellidoDocente;
        clave = this.d_pass;
        correo = this.d_mail;
    }

    else {
        nombre = this.nombreAlumno;
        apellido = this.apellidoAlumno;
        usuario = this.a_user;
        clave = this.a_pass;
        correo = this.a_mail;
    }


    let nav : NavigationExtras = {
      state: {
        rol: tipoUsuario,
        user: usuario,
        pass: clave,
        mail: correo,
        name: nombre,
        lastname: apellido,
      }
    };

    if (
      tipoUsuario == 'profesor'
      ){
      this.router.navigate(['home'], nav);
    }
  
    else {
      this.router.navigate(['perfilalumno'], nav);
    }

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Credenciales Incorrectas',
      subHeader: '(Intente nuevamente)',
      message: 'Asegurese de ingresar correctamente sus datos.',
      buttons: ['OK'],
    });

    await alert.present();
  }



  constructor(private authprofesor: AuthguardGuard, private authalumno: AuthalumnoGuard, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

}
