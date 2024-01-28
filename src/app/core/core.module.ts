import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DialogService } from './services/dialog/dialog.service';

@NgModule({
  imports: [],
  providers: [DialogService],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.',
      );
    }
  }
}