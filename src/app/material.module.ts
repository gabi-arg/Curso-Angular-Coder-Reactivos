import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import{MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MaterialModule { }
