import { workInterface } from './../../../Interfaces/workInterface';
import { Component, Input, OnInit } from '@angular/core';
import { WorkListService } from 'src/app/services/work-list.service';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent implements OnInit{
  @Input() title:string = '';

  workList: workInterface[] = [];


  constructor(private WorkService: WorkListService) { }

  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList():void {
    this.WorkService.getWorks().subscribe((workList) => {
      this.workList = workList
    });
  }

  addWork(): void{
    let newId: number = this.workList.length + 1
    const newWork: workInterface = {
      "id": newId,
      "title": "Cuarto trabajo",
      "urlImag": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvyDL1zd_EKKSzbMniw1k-6WMFwtBifILRA&usqp=CAU",
      "description": "Me encanto este cuarto trabajo"
    }
    this.WorkService.add(newWork as workInterface)
    .subscribe((work: workInterface) => {
      this.workList.push(work);
    });
  }

  removeWorkToList(workToRemove: workInterface): void{
    this.WorkService.remove(workToRemove.id).subscribe();
    this.getWorkList();
  }

}
