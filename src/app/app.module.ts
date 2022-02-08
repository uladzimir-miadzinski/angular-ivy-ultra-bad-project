import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DatabaseCalculationsComponent } from './database-calculations/database-calculations.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ToolbarComponent, DatabaseCalculationsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
