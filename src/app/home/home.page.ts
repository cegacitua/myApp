import { Component, OnInit} from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { ConsumoapiService } from '../services/consumoapi.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  nombre = "";
  id: any = null;
  cursos: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private ConsumoAPI : ConsumoapiService) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras.state?.['nombre'];
        this.id = this.router.getCurrentNavigation()?.extras.state?.['id'];
      }
    })
  }

  listadoCurso(cursoId: number) {
    let setData: NavigationExtras = {
      state: {
        idProfesor: this.id,
        idCurso : cursoId
      }
    };
    this.router.navigate(['/qr'],setData);
}


  ngOnInit() {
    this.ConsumoAPI.obtenerCursosPorProfesor(this.id).subscribe(data => {
      this.cursos = data;
      console.log(this.cursos);
    });
  }

}
