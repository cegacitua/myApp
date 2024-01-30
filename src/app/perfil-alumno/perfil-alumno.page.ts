import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.page.html',
  styleUrls: ['./perfil-alumno.page.scss'],
})
export class PerfilAlumnoPage  {

  nombre = "";
  id: any = null;

  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.id = this.router.getCurrentNavigation()?.extras.state?.['id'];
      }
    })
  }



  navegarACamara() {
    let setData: NavigationExtras = {
      state: {
        nombre: this.nombre,
        id: this.id,
      }
    };
    this.router.navigate(['/camera'],setData);
  }
}