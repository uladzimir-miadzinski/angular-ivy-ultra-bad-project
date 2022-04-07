import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 class="display-4">Hello,<br>{{name}}!</h1>`,
  styles: [`h1 { text-align: center }`]
})
export class HelloComponent  {
  @Input() name: string;
}
