import { InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { database } from './db';

export const DBServiceToken = new InjectionToken<DBService>('Injectable DBService', {
  providedIn: 'root',
  factory: () => new DBService(),
});

export class DBService {
  getDatabase(): Observable<number[]> {
    return of(database);
  }
}