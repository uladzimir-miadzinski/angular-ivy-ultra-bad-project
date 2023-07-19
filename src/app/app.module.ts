import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DatabaseCalculationsComponent } from './database-calculations/database-calculations.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseCalculationsModule } from './database-calculations/database-calculations.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule, DatabaseCalculationsModule ],
  declarations: [ AppComponent, HelloComponent, ToolbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
