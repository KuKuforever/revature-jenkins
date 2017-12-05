import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSellPostComponent } from './new-sell-post.component';

describe('NewSellPostComponent', () => {
  let component: NewSellPostComponent;
  let fixture: ComponentFixture<NewSellPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSellPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSellPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
