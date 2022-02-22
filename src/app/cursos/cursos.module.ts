import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material';
import { CursosComponent } from './cursos';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, CursosRoutingModule, AppMaterialModule],
})
export class CursosModule {}
