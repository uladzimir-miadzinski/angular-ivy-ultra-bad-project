import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolbarService } from '../services/toolbar.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  toolbarService: ToolbarService;
  toolbar = [];
  currentPage = 'Home';
  isClosedNav = false;
  @Input() exit = new EventEmitter();

  @Output() click = new EventEmitter<number>();


  constructor() { 
    this.toolbarService = new ToolbarService();
    this.toolbar = this.toolbarService.getToolbar();
  }

  ngOnChanges() {
    this.toolbar = this.toolbarService.getToolbar();
  }

  getClasses(index) {
    return this.toolbar[index].label === this.currentPage ? 'active' : '';
  }

  onClick() {
    this.isClosedNav = !this.isClosedNav;
  }

  onNavItemClick(number: number) {
    console.log('Nav Item Clicked', number);
    this.click.emit(number);
  }

  onExit() {
    this.exit.emit();
  }
}