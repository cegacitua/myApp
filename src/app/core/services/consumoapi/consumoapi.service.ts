import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../../model/usuario';
import { alumnos } from '../../model/alumno';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }


  url: string = environment.apiUrl;

  // url: string = 'https://api-registrapp-8g1d.onrender.com/';

  // url: string = 'http://127.0.0.1:5000/';

  public login(usuario: string, pass: string): Observable<HttpResponse<usuario>> {
    const body = {
      user: usuario,
      password: pass
    };

    return this.http.post<usuario>(this.url + "login", body, { ...this.httpOptions, observe: 'response' });
  }

  public registrarUsuario(usuario: string, pass: string, nombre: string, perfil: number, correo: string): Observable<HttpResponse<any>> {
    const body = {
      user: usuario,
      password: pass,
      nombre: nombre,
      perfil: perfil,
      correo: correo
    };
  
    return this.http.post<any>(this.url + "registrar", body, { ...this.httpOptions, observe: 'response' });
  }


  public obtenerCursosPorProfesor(profesorId: number): Observable<any> {
    return this.http.get<any>(this.url + 'profesores/' + profesorId + '/cursos', this.httpOptions);
  }

  public obtenerAlumnosPorCurso(profesorId: number, cursoId: number): Observable<alumnos[]> {
    return this.http.get<alumnos[]>(this.url + 'profesores/' + profesorId + '/cursos/' + cursoId + '/alumnos', this.httpOptions);
  }

  public registrarAsistencia(body: any): Observable<any> {
    return this.http.post<any>(this.url + 'registrar_asistencia', body, this.httpOptions);
  }



  constructor(private http: HttpClient) {
  }
}