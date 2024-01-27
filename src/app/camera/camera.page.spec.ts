// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CameraPage } from './camera.page';

// import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

// describe('CameraPage', () => {
//   let component: CameraPage;
//   let fixture: ComponentFixture<CameraPage>;

//   beforeEach(async(() => {
//     fixture = TestBed.createComponent(CameraPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call availableAlert when Google Barcode Scanner module is available', async () => {
//     spyOn(component, 'availableAlert');
//     spyOn(BarcodeScanner, 'isGoogleBarcodeScannerModuleAvailable').and.returnValue(Promise.resolve({ available: true }));

//     await component.CheckGoogleBSModuleAvailable();

//     expect(component.availableAlert).toHaveBeenCalled();
//   });

//   it('should call noAvailableAlert when Google Barcode Scanner module is not available', async () => {
//     spyOn(component, 'noAvailableAlert');
//     spyOn(BarcodeScanner, 'isGoogleBarcodeScannerModuleAvailable').and.returnValue(Promise.resolve({ available: false }));

//     await component.CheckGoogleBSModuleAvailable();

//     expect(component.noAvailableAlert).toHaveBeenCalled();
//   });
// });