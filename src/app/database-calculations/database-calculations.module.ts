import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseCalculationsComponent } from './database-calculations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DatabaseCalculationsComponent
  ],
  exports: [
    DatabaseCalculationsComponent
  ]
})
export class DatabaseCalculationsModule { }