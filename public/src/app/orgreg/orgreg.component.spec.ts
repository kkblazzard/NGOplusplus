import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgregComponent } from './orgreg.component';

describe('OrgregComponent', () => {
  let component: OrgregComponent;
  let fixture: ComponentFixture<OrgregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
