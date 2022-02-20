import { Component, EventEmitter, OnChanges, Input } from '@angular/core';
import { ToolbarService } from '../services/toolbar.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnChanges {
  toolbarService: ToolbarService;
  toolbar = [];
  currentPage = 'Home';
  isClosedNav = false;

  @Input() click = new EventEmitter<number>();

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

  onNavItemClick(index: number) {
    console.log('Nav Item Clicked', index);
    this.click.emit(index);
  }
}