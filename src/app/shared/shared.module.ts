import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material';
import { ErrorDialogComponent } from './components/error-dialog';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [ErrorDialogComponent, CategoryPipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErrorDialogComponent, CategoryPipe],
})
export class SharedModule {}
