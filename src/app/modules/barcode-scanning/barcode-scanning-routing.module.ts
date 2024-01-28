import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarcodeScanningPage } from './barcode-scanning.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodeScanningPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BarcodeScanningRoutingModule {}