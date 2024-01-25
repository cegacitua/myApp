import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsumoapiService } from '../services/consumoapi.service';
import { Capacitor } from '@capacitor/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Camera, ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {

  nombre = "";
  boton = ['Cerrar Sesión'];

  userHome: any;
  idAlumno: any;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private activeroute: ActivatedRoute,
    private router: Router,
    private apiService: ConsumoapiService,
    private alertController: AlertController
  ) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
        this.idAlumno = this.router.getCurrentNavigation()?.extras.state?.['id'];
      }
    });
  }

  ngOnInit() {
    this.requestCameraPermission();
  }

  async requestCameraPermission() {
    console.log('requestCameraPermission was called');
   
    const cameraStatus = await Camera.checkPermissions();

    if (cameraStatus.camera !== 'granted') {
      await Camera.requestPermissions();
      this.startScanner();
    } else {
      this.startScanner();
    }
  }

  async startScanner() {
    console.log('startScanner was called');

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Scanned something', barcodeData.text);
      const [codigo, seccion, fecha] = barcodeData.text.split('-');
      this.registrarAsistencia(codigo, seccion, fecha);
    }).catch(err => {
      console.log('Error:', err);
    });
  }

  async showSettingsAlert() {
    const alert = await this.alertController.create({
      header: 'Permiso de Cámara',
      message: 'Se necesita acceso a la cámara para escanear códigos QR. Por favor, habilite el acceso a la cámara en la configuración de su dispositivo.',
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