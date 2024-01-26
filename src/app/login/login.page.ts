import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

import { AuthguardGuard } from '../guards/authguard.guard';
import { AuthalumnoGuard } from '../guards/authalumno.guard';

import { usuario } from '../model/usuario';
import { perfil } from '../model/perfil';
import { curso } from '../model/curso';
import { ConsumoapiService } from '../services/consumoapi.service';

import { RegistroComponent } from '../registro/registro.component';



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

  
  private animation!: Animation;
  private typeuser!: usuario;
  private typePerfil!: perfil;
  private curso!:curso;



  login() {
    this.consumoapi.login(this.usuario.value.user!, this.usuario.value.pass!).subscribe(
      (response) => {
        this.typeuser = response.body as unknown as usuario;
        console.log("bbb" + response.status);
        if (response.status == 200) {
          let setData: NavigationExtras = {
            state: {
              id: this.typeuser.id,
              user: this.typeuser.user,
              correo: this.typeuser.correo,
              nombre: this.typeuser.nombre,
              tipoPerfil: this.typeuser.tipoPerfil
            }
          };

          console.log("aaas"+this.typeuser.tipoPerfil);

          if (this.typeuser.tipoPerfil === 1) {
            this.authprofesor.setAuth(true);
            this.router.navigate(['/home'], setData);
          }

          if (this.typeuser.tipoPerfil === 2) {
            this.authalumno.setAuth(true);
            this.router.navigate(['/perfilalumno'], setData);
          }
        }

        if (response.status === 401) {
          this.presentAlert();

        }
      },
      (error) => {
        console.error('Error en inicio de sesión:', error);
      });
  }




  async abrirModalRegistro() {
    const modal = await this.modalController.create({
      component: RegistroComponent,
    });
  
    await modal.present();
  
    const { data } = await modal.onWillDismiss();
    if (data && data.registrado) {
      // El usuario se registró con éxito en el modal
      // Aquí puedes realizar alguna acción, como redirigir al usuario a otra página
      this.router.navigate(['/login']);
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



  constructor(
    private authprofesor: AuthguardGuard,
    private authalumno: AuthalumnoGuard,
    private router: Router,
    private alertController: AlertController,
    private consumoapi:ConsumoapiService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
  }

}
