import { Component } from '@angular/core';
import { Alumnos } from './models/estudiante';
import { AlumnoService } from './services/alumno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programacionReactiva-Duran';
  constructor(
    private alumnosServicio: AlumnoService){

  }
  agregarAlumno(){
    let a: Alumnos ={
      nombre:'Maria',
      username: 'Maru',
      edad: 24,
      cursosInscriptos: 'Js'
    };
    this.alumnosServicio.agregarAlumno(a);
  }
}
