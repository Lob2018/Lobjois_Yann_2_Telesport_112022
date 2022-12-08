import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Olympic } from '../models/olympic.model';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[]>([]);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        // TODO: improve error handling
        console.error(`Got ${error.status}: ${error.description}`);
        if (error.status === 500) {
          console.error('The server has encountered an unexpected problem');
          // can get alternante data source for failover -> return getServer#Data()
        }
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next([]);
        return caught;
      })
    );
  }

  getOlympics(): Observable<Olympic[]> {
    return this.olympics$.asObservable();
  }

  getOlympicById(olympicId: number): Observable<Olympic | undefined> {
    return this.getOlympics().pipe(
      map((olympics) => olympics.find((olympic) => olympic.id === olympicId))
    );
  }
}
