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

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ToolbarComponent, DatabaseCalculationsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
