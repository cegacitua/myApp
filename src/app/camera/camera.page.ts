import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsumoapiService } from '../services/consumoapi.service';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { Camera, ImageOptions } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';



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
    private camera: Camera,
    private qrScanner: QRScanner,
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

    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {

        console.log('QRScanner prepared', status);

        if (status.authorized) {
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            const [codigo, seccion, fecha] = text.split('-');
            this.registrarAsistencia(codigo, seccion, fecha);
            this.qrScanner.hide();
            scanSub.unsubscribe();
          });

          this.qrScanner.show();

          console.log('QRScanner should be showing now');

        } else if (status.denied) {
          this.showSettingsAlert();
        }
      })
      .catch((e: any) => console.log('Error:', e));
  }


  // camara() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };

  //   this.camera.getPicture(options).then((imageData) => {
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     console.log(base64Image);
  //   }).catch((err) => {
  //     console.error(err);
  //   });
  // }

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







  // constructor(private activatedRoute: ActivatedRoute, private router:Router) {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //     if (this.router.getCurrentNavigation()?.extras.state){
  //       this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
  //     }
  //   })
  // }




