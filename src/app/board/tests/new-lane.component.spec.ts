import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLaneComponent } from '../new-lane/new-lane.component';

describe('NewLaneComponent', () => {
  let component: NewLaneComponent;
  let fixture: ComponentFixture<NewLaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
