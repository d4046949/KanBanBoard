import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryComponent } from '../new-entry/new-entry.component';

describe('NewEntryComponent', () => {
  let component: NewEntryComponent;
  let fixture: ComponentFixture<NewEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display new entry on the screen', () => {
    const html = fixture.debugElement.nativeElement;
    expect(html.innerText).toBe('New Entry');
  });
});