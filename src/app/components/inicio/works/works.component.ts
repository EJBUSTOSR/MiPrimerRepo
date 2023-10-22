import { Component, EventEmitter, Input, Output } from '@angular/core';
import { workInterface } from 'src/app/Interfaces/workInterface';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  @Input() workList: any;
  @Output() workRemove: EventEmitter<workInterface> = new EventEmitter();


  deleteWork(workDelete: workInterface){
    this.workRemove.emit(workDelete);
  }

}

