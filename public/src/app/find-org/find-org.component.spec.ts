import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOrgComponent } from './find-org.component';

describe('FindOrgComponent', () => {
  let component: FindOrgComponent;
  let fixture: ComponentFixture<FindOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
