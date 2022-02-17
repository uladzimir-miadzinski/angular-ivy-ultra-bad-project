import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [{
    provide: UpperCasePipe
  }]
})
export class AppComponent  {
  name = '';
  value = 0;
  logger: LoggerService;

  constructor(private upperCasePipe: UpperCasePipe) {
    this.name = this.upperCasePipe.transform('Project of your DREAM');
    this.logger = new LoggerService();
  }

  onInput() {
    const inputElement = document.querySelector('input');
    this.value = +inputElement.value;
    this.logger.log('Assigned new value');
  }

  getSquare(num: number): number {
    return num * num;
  }

  onToolbarItemClick(index: number) {
    console.log(index);
  }
}
