import { NgModule } from '@angular/core';

import { BarcodeScanningRoutingModule } from './barcode-scanning-routing.module';

import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { BarcodeScanningPage } from './barcode-scanning.page';
import { IonicModule } from '@ionic/angular';
import { SharedTestingModule } from 'src/test/modules/shared-testing.module';

@NgModule({
  imports: [IonicModule, BarcodeScanningRoutingModule, SharedTestingModule],
  declarations: [BarcodeScanningPage, BarcodeScanningModalComponent],
})
export class BarcodeScanningModule {}