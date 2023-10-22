import { Component, Input, OnInit } from '@angular/core';
import { workInterface } from 'src/app/Interfaces/workInterface';
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

}
