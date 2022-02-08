import { Component, OnChanges } from '@angular/core';
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

}