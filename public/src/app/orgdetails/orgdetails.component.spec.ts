import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgdetailsComponent } from './orgdetails.component';

describe('OrgdetailsComponent', () => {
  let component: OrgdetailsComponent;
  let fixture: ComponentFixture<OrgdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
