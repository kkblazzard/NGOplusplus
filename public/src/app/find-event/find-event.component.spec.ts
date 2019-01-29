import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEventComponent } from './find-event.component';

describe('FindEventComponent', () => {
  let component: FindEventComponent;
  let fixture: ComponentFixture<FindEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
