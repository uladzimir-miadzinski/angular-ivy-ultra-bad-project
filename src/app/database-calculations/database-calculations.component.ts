import { UpperCasePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { DBService, DBServiceToken } from '../services/db.service';

@Component({
  selector: 'app-database-calculations',
  templateUrl: './database-calculations.component.html',
  styleUrls: ['./database-calculations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatabaseCalculationsComponent implements OnInit {
  database: Observable<number[]>;

  constructor(@Inject(DBServiceToken) public dbService: DBService) { }

  ngOnInit() {
    this.database = this.dbService.getDatabase();
  }

  convertToSquares(numbers: number[]) {
    const squares = [];

    numbers.forEach(num => (squares.push(new AppComponent(new UpperCasePipe()).getSquare(num))));

    return squares;
  }
}