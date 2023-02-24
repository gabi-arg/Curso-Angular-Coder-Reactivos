import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumnos } from 'src/app/models/estudiante';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy{
  alumnos!: Alumnos[];
  dataSource!: MatTableDataSource<Alumnos>;
  columnas: string[] = ['nombre', 'username','edad','cursosInscriptos']
  suscripcion!: Subscription;
  constructor(
    private alumnosServicio: AlumnoService
  ){

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Alumnos>();
    this.suscripcion = this.alumnosServicio.obtenerAlumnosObservable().subscribe((alumnos: Alumnos[])=>{
    this.dataSource.data = alumnos;
    });

  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }
}
