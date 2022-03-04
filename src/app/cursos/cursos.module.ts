import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material';
import { SharedModule } from './../shared';
import { CursosComponent } from './cursos';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, CursosRoutingModule, AppMaterialModule, SharedModule],
})
export class CursosModule {}
