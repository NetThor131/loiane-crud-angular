import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CursosComponent } from './cursos';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, CursosRoutingModule, MatTableModule],
})
export class CursosModule {}
