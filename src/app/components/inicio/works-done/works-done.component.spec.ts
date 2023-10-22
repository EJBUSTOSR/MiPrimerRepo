import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksDoneComponent } from './works-done.component';

describe('WorksDoneComponent', () => {
  let component: WorksDoneComponent;
  let fixture: ComponentFixture<WorksDoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksDoneComponent]
    });
    fixture = TestBed.createComponent(WorksDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
