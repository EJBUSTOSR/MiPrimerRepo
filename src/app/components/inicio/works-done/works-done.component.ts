import { Component, Input } from '@angular/core';
import { workInterface } from 'src/app/Interfaces/workInterface';
import { WORKS } from 'src/assets/files/mockWork';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent {
  @Input() title:string = '';

  workList: workInterface[] = WORKS;

}
