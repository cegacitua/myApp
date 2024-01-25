import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsumoapiService } from './services/consumoapi.service';
import { Camera } from '@capacitor/camera';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: BarcodeScanner, useClass: BarcodeScanner }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
