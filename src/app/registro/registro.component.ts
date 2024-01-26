import { Component, OnInit } from '@angular/core';
import { ConsumoapiService } from '../services/consumoapi.service';
import { ModalController, AlertController } from '@ionic/angular';

import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})


export class RegistroComponent  implements OnInit {

  constructor(
    private modalController: ModalController,
    private consumoapi:ConsumoapiService,
    private fb: FormBuilder,
    private alertController: AlertController,
    ) { }


  esEntero(control: AbstractControl<any, any>): ValidationErrors | null {
    return Number.isInteger(control.value) ? null : { noEsEntero: true };
  }

  usuario = new FormGroup( {
    user: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    nombre: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    correo: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    perfil: new FormControl('',[Validators.required, Validators.minLength(1), Validators.maxLength(2), this.esEntero]),
  });



    mensaje: string = '';

    registrar() {
      this.consumoapi.registrarUsuario(
        this.usuario.value.user!,
        this.usuario.value.pass!,
        this.usuario.value.nombre!,
        Number(this.usuario.value.perfil!),
        this.usuario.value.correo!
      ).subscribe(
        (response) => {
          if (response.status == 201) {
            // El usuario se registró con éxito
            this.mostrarAlerta('Usuario registrado con éxito!');
            console.log('Usuario registrado con éxito:', response.body);
          } else {
            // Hubo un problema al registrar al usuario
            this.mensaje = 'Error al registrar al usuario';
            console.error('Error al registrar al usuario:', response.status);
          }
        },
        (error) => {
          // Hubo un error en el registro
          if (error.status === 400 && error.error.message === 'El nombre de usuario ya está en uso') {
            this.mensaje = 'El nombre de usuario ya está en uso';
          } else {
            this.mensaje = 'Error en el registro';
          }
          console.error('Error al registrar al usuario:', error);
        });
    }

    async mostrarAlerta(mensaje: string) {
      const alert = await this.alertController.create({
        header: 'Registro',
        message: mensaje,
        buttons: [
          {
            text: 'Ingresar sesión',
            handler: () => {
              this.cerrarModal();
              this.modalController.dismiss({ registrado: true });
            }
          }
        ]
      });
    
      await alert.present();
    }

  cerrarModal() {
    this.modalController.dismiss({
      'dismissed': true,
      'user': this.usuario.value.user,
      'pass': this.usuario.value.pass,
      'nombre': this.usuario.value.nombre,
      'perfil': this.usuario.value.perfil,
      'correo': this.usuario.value.correo
    });
  }

  ngOnInit() {
    this.usuario = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      pass: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      perfil: ['', [Validators.required, Validators.min(1), Validators.max(2)]],
    });
  }

}



