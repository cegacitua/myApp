import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsumoapiService } from '../services/consumoapi.service';

// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
// import { Camera } from '@capacitor/camera';
// import { Capacitor } from '@capacitor/core';



@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage {

  nombre = "";
  boton = ['Cerrar Sesión'];


  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
    this.activatedRoute.queryParams.subscribe(params => {
  if (this.router.getCurrentNavigation()?.extras.state){
  this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
  }
    })
  }



}
