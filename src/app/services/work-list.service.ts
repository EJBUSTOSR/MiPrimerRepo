import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs';
import { workInterface } from '../Interfaces/workInterface';
// import { WORKS } from 'src/assets/files/mockWork';   //Parte1

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  // workList: workInterface[] = WORKS;   //Parte1
  worksUrl = 'api/works';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // getWorks():Observable<workInterface[]>{   //Parte1
  //   const works = of(WORKS);   //Parte1
  //   return works;   //Parte1
  // }   //Parte1



  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.body.error};
    }`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getWorks(): Observable<workInterface[]> {
    // return this.http.get<workInterface[]>(this.worksUrl);   //Parte2

    return this.http.get<workInterface[]>(this.worksUrl).pipe(
      catchError(this.handleError<workInterface[]>('getWorks', []))
    );
  }

  add(newWork: workInterface) {
    return this.http.post<workInterface>(this.worksUrl, newWork, this.httpOptions).pipe(
      tap((newWork: workInterface) => console.log(newWork.title)),
      catchError(this.handleError<workInterface>('newWork'))
    );
  }

  remove(id: number):Observable<workInterface>{
    const url = `${this.worksUrl}/${id}`;

    return this.http.delete<workInterface>(url, this.httpOptions).pipe(
      tap(() => console.log(`deleted work id=${id}`)),
      catchError(this.handleError<workInterface>('deleteWork'))
    );
  }

}
