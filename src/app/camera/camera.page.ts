import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsumoapiService } from '../services/consumoapi.service';



import { isPlatform} from '@ionic/angular';
import { Capacitor, PermissionState } from '@capacitor/core';

import { Camera, ImageOptions, CameraResultType, CameraSource } from '@capacitor/camera';

import {
  Barcode,
  BarcodeScanner,
  BarcodeFormat,
  LensFacing
} from '@capacitor-mlkit/barcode-scanning';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  nombre = "";
  boton = ['Cerrar Sesión'];

  userHome: any;
  idAlumno: any;

  isSupported = false;
  barcodes: Barcode[] = [];

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


  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }




  async scan(): Promise<void> {
    // const granted = await this.requestPermissions();
    // if (!granted) {
    //   this.presentAlert();
    //   return;
    // }
    const checkModule = await this.CheckGoogleBSModuleAvailable();
    const { barcodes } = await BarcodeScanner.scan({
      formats: [BarcodeFormat.QrCode],
    });
    await this.showAlert(JSON.stringify(barcodes));
    if (barcodes.length > 0) {
      this.aperturaAlert();
      this.barcodes.push(...barcodes);
      this.capturaAlert();
      // this.registrarAsistencia(barcodes[0].displayValue);
    } else {
      this.errorAlert();
    }
  }






  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }



  async CheckGoogleBSModuleAvailable(): Promise<void> {
    const result = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    if (result.available) {
      this.availableAlert();
    }
    else {
      this.noAvailableAlert();
    }
  }
  noAvailableAlert() {
    throw new Error('Method not implemented.');
  }
  availableAlert() {
    throw new MessageEvent('Method implemented.');
  }




  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso de Cámara',
      message: 'Se necesita acceso a la cámara para escanear códigos QR. Por favor, habilite el acceso a la cámara en la configuración de su dispositivo.',
      buttons: ['OK']
    });
    await alert.present();
  }



  async aperturaAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Apertura de escaner exitosa',
      message: 'Se abrió el escaner .',
      buttons: ['OK']
    });
    await alert.present();
  }


  async capturaAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Escaneo exitoso',
      message: 'Se almacenó exitosamente el QR en el array.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async errorAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Escaneo Fallido',
      message: 'El escaneo no se pudo realizar.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Debug',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
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
    });
  }
}