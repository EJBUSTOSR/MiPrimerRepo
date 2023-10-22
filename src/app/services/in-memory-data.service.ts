import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const works = [
      {
      "id": 1,
      "title": "Primer trabajo",
      "urlImag": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvyDL1zd_EKKSzbMniw1k-6WMFwtBifILRA&usqp=CAU",
      "description": "Me encanto este trabajo"
    },
    {
      "id": 2,
      "title": "Segundo trabajo",
      "urlImag": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvyDL1zd_EKKSzbMniw1k-6WMFwtBifILRA&usqp=CAU",
      "description": "Me encanto este segundo trabajo"

    },
    {
      "id": 3,
      "title": "Tercer trabajo",
      "urlImag": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvyDL1zd_EKKSzbMniw1k-6WMFwtBifILRA&usqp=CAU",
      "description": "Me encanto este tercer trabajo"

    }
    ];

    return {works};
  }

}
