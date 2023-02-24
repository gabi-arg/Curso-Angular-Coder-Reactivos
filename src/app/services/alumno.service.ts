import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumnos } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos$: BehaviorSubject<Alumnos[]>;

  private alumnos: Alumnos[] = [
    { nombre: 'Tomas',
      username: 'Tom',
      edad: 30,
      cursosInscriptos: 'Angular'},
    { nombre: 'Manuel',
      username: 'Manu',
      edad: 22,
      cursosInscriptos: 'Javascript'},
      { nombre: 'Raquel',
      username: 'Raq',
      edad: 36,
      cursosInscriptos: 'React'},
    { nombre: 'Agustin',
      username: 'Agus',
      edad: 28,
      cursosInscriptos: 'Angular'},
      { nombre: 'Marta',
      username: 'Mar',
      edad: 23,
      cursosInscriptos: 'Angular'},
    { nombre: 'Sol',
      username: 'Sol',
      edad: 29,
      cursosInscriptos: 'Angular'},

  ]

constructor(){
  this.alumnos$ = new BehaviorSubject(this.alumnos)
}


obtenerAlumnosPromise():Promise<Alumnos[]> {
  return new Promise((resolve, reject)=>{
    if(this.alumnos.length > 0){
      resolve(this.alumnos)
    }else{
      reject([]);
    }
  });
}
obtenerAlumnosObservable():Observable<Alumnos[]> {;
  return this.alumnos$.asObservable();
 };


 agregarAlumno(alumno: Alumnos){
  this.alumnos.push(alumno);
  this.alumnos$.next(this.alumnos)

}

}



