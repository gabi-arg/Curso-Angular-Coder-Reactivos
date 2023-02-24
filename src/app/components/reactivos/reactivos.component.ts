import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { Alumnos } from 'src/app/models/estudiante';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {
  alumnos!: Alumnos[];
  alumnos$!: Observable<Alumnos[]>;
  constructor(
    private alumnosServicio: AlumnoService

  ){
    of(this.alumnos).pipe(
      map((alumnos:Alumnos[]) =>{
        return alumnos.filter((alumno:Alumnos) => alumno.cursosInscriptos == 'Angular' )
      })
    ).subscribe((alumnos)=> {
      console.log('obtenido de of, filtrado por cursos Inscripto', alumnos )
    })

  }
  ngOnInit(): void {
    this.alumnos$ = this.alumnosServicio.obtenerAlumnosObservable();
    this.alumnos$.subscribe((alumnos: Alumnos[])=>{
    this.alumnos = alumnos;

    })

  }

}
