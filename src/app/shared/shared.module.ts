import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material';
import { ErrorDialogComponent } from './components/error-dialog';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent],
})
export class SharedModule {}
