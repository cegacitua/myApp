import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsumoapiService } from './core/services/consumoapi/consumoapi.service';
import { Camera } from '@capacitor/camera';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './modules/registro/registro.component';

import {
  Barcode,
  BarcodeScanner,
  BarcodeFormat,
  LensFacing
} from '@capacitor-mlkit/barcode-scanning';



@NgModule({
  declarations: [AppComponent, RegistroComponent],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: BarcodeScanner, useClass: BarcodeScanner }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}


