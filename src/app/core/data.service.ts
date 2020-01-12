import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ISpecies } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    apiUrl = '../assets/species.json';
    
    constructor(private http: HttpClient) { }

    getSpeciesList() : Observable <ISpecies[]> {
        return this.http.get<ISpecies[]>(this.apiUrl)
        .pipe(
            catchError(this.handleError)
        );
    }

    getSpecies(id: number) : Observable<ISpecies> {
        return this.http.get<ISpecies[]>(this.apiUrl)
          .pipe(
            map(speciesList => {
              let species = speciesList.filter((spec: ISpecies) => +spec.id === +id);
              return (species && species.length) ? species[0] : null;
            }),
            catchError(this.handleError)
          )
      }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return throwError(error);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return throwError(error || 'Node.js server error');
    }

}