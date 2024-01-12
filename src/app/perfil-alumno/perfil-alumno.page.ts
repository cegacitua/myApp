import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage  {

  usuario = "";
  boton = ['Cerrar Sesión'];

  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.usuario = this.router.getCurrentNavigation()?.extras.state?.['user'];
      }
    })
  }

  // navigate(){
  //   this.router.navigate(['/camera'])
  // }

}


