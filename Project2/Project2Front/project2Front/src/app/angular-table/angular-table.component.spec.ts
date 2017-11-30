import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTableComponent } from './angular-table.component';

describe('AngularTableComponent', () => {
  let component: AngularTableComponent;
  let fixture: ComponentFixture<AngularTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
