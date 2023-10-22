import { Injectable } from '@angular/core';
import { workInterface } from '../Interfaces/workInterface';
import { WORKS } from 'src/assets/files/mockWork';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  // workList: workInterface[] = WORKS;
  worsUrl = 'api/works';

  constructor(private http: HttpClient) { }

  // getWorks():Observable<workInterface[]>{
  //   const works = of(WORKS);
  //   return works;
  // }

  getWorks():Observable<workInterface[]>{
      return this.http.get<workInterface[]>(this.worsUrl);
    }

}
