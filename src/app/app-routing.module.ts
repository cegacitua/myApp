import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './core/guards/authguard.guard';
import { AuthalumnoGuard } from './core/guards/authalumno.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule),
    // canActivate: [AuthguardGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./modules/qr/qr.module').then( m => m.QrPageModule),
    // canActivate: [AuthguardGuard]
  },
  {
    path: 'perfilalumno',
    loadChildren: () => import('./modules/perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule),
    // canActivate: [AuthalumnoGuard]
  },
  {
    path: 'barcode-scanning',
    loadChildren: () => import('./modules/barcode-scanning/barcode-scanning.module').then( m => m.BarcodeScanningModule),
    // canActivate: [AuthalumnoGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./modules/page404/page404.module').then( m => m.Page404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
