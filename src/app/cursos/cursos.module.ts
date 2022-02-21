import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, CursosRoutingModule],
})
export class CursosModule {}
