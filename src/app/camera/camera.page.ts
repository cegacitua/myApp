import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsumoapiService } from '../services/consumoapi.service';

import { ViewChild, ElementRef } from '@angular/core';

import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  @ViewChild(NgxScannerQrcodeComponent, { static: false })
  scanner!: NgxScannerQrcodeComponent;
  qrScanned = false;

  // @ViewChild(NgxScannerQrcodeModule, { static: false })
  // qr!: NgxScannerQrcodeModule;


  ngOnInit() {
    this.startScan();
  }

  startScan() {
    if (this.scanner) {
      this.scanner.start();
    }
  }


  async handleQrScan(data: any) {
    this.qrScanned = true;

  }


  async procesarQR() {
    let qr = this.scanner.data.value[0].value;
    let partes = qr.split('-');

    if (partes.length !== 3 || qr.length > 20){
      console.error('El código QR no tiene el formato correcto.');
    }
    else{
    let [codigo, seccion, fecha] = partes;
    this.registrarAsistencia(codigo, seccion, fecha);
    }
  }



  registrarAsistencia(codigo: string, seccion: string, fecha: string) {
    const body = {
      alumno_id: this.idAlumno,
      codigo: codigo,
      seccion: seccion,
      fecha: fecha
    };

    this.apiService.registrarAsistencia(body).subscribe(response => {
      console.log(response);
      this.stopScan();
    });
    this.capturaAlert()
  }


  stopScan() {
    if (this.scanner) {
      this.scanner.stop();
    }
  }




  userHome: any;
  idAlumno: any;

  nombre = "";
  boton = ['Cerrar Sesión'];

  constructor(
    private alertController: AlertController,
    private activeroute: ActivatedRoute,
    private router: Router,
    private apiService: ConsumoapiService,
  ) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
        this.idAlumno = this.router.getCurrentNavigation()?.extras.state?.['id'];
      }
    });
  }





  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso de Cámara',
      message: 'Se necesita acceso a la cámara para escanear códigos QR. Por favor, habilite el acceso a la cámara en la configuración de su dispositivo.',
      buttons: ['OK']
    });
    await alert.present();
  }


  async capturaAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'QR escaneado correctamente',
      message: `Excelente ${this.nombre}, has registrado tu asistencia a la clase.`,
      buttons: [{
        text: 'Cerrar Sesión',
        handler: () => {
          this.router.navigate(['/login']);
        }
      }]
    });

    await alert.present();
  }

}