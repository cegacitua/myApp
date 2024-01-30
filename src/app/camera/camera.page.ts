import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsumoapiService } from '../services/consumoapi.service';
import { ViewChild, ElementRef } from '@angular/core';

import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit, AfterViewInit {

  @ViewChild(NgxScannerQrcodeComponent, { static: false })
  scanner!: NgxScannerQrcodeComponent;
  qrScanned = false;


  codigo: string = '';
  seccion: string = '';
  fecha: string = '';


  ngOnInit() {
  }


  ngAfterViewInit() {
    if (this.scanner) {
      this.scanner.isReady.subscribe(() => {
        this.handle(this.scanner);
      });

      this.scanner.data.subscribe(data => {
        if (data && data.length > 0) {
          this.procesarQR(data[0].value);
        }
      });
    }
  }



  public handle(scanner: any): void {
    const playDeviceFacingBack = (devices: any[]) => {
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label)));
      if (device) {
        scanner.playDevice(device.deviceId);
      } else {
        console.log('No se encontró un dispositivo con etiqueta back, rear o environment');
      }
    }
    scanner['start'](playDeviceFacingBack).subscribe();
  }



  async procesarQR(qr: string) {
    let partes = qr.split('_');

    if (partes.length !== 3 || qr.length > 25){
      this.errorAlert();
    }
    else{
      [this.codigo, this.seccion, this.fecha] = partes;
      console.log(this.codigo, this.seccion, this.fecha);
      this.qrScanned = true;
    }
  }



  registrarAsistencia() {
    const body = {
      nombreAlumno: this.nombre,
      codigo: this.codigo,
      seccion: this.seccion,
      fecha: this.fecha
    };
    this.capturaAlert();
    this.apiService.registrarAsistencia(body).subscribe(response => {
      // this.capturaAlert(response)
      this.scanner.stop();
    });

  }


  nombre: string = "";
  idAlumno: any = null;

  boton = ['Cerrar Sesión'];

  constructor(
    private alertController: AlertController,
    private activeroute: ActivatedRoute,
    private router: Router,
    private apiService: ConsumoapiService,
  ) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
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


  async errorAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Formato de QR incorrecto',
      message: `El código QR no tiene el formato correcto.`,
      buttons: [{
        text: 'Reintentar'
      }]
    });

    await alert.present();
  }



}