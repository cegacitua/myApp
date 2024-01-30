import { Component, OnInit } from '@angular/core';
import { curso } from '../model/curso';
import { alumnos } from '../model/alumno';
import { ConsumoapiService } from '../services/consumoapi.service';
import { ActivatedRoute, Router, Route } from '@angular/router';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  cursol: curso | undefined;
  alumnosl: alumnos[] | undefined = [];
  profesorId: number = 0;
  cursoId:any;

  qrDataURL: string = '';

  constructor(private apiService: ConsumoapiService, private router: Router, private activeroute : ActivatedRoute) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.profesorId = this.router.getCurrentNavigation()?.extras.state?.['idProfesor'];
        this.cursoId = this.router.getCurrentNavigation()?.extras.state?.['idCurso'];
      }
    });

  }

  async generateQRCode() {
    if (this.cursol) {
        const fechaActual = new Date().toISOString().split('T')[0];
        // const data = "hola mundo";
        const data = `${this.cursol.codigo}_${this.cursol.seccion}_${fechaActual}`;


        try {
            // this.qrDataURL = await QRCode.toDataURL(data);
            this.qrDataURL = await QRCode.toString(data, { type: 'svg' });
        } catch (err) {
            console.error(err);
        }
    }
  }

  ngOnInit() {
    this.apiService.obtenerCursosPorProfesor(this.profesorId).subscribe(
        data => {
          this.cursol = data.find((curso: curso) => curso.id === this.cursoId);
            this.alumnosl = this.cursol ? this.cursol.alumnos : [];
            this.generateQRCode();
        },
        error => {
            console.error("Error obteniendo cursos:", error);
        }
    );
  }
}


