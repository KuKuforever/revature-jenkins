import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuyPostComponent } from './new-buy-post.component';

describe('NewBuyPostComponent', () => {
  let component: NewBuyPostComponent;
  let fixture: ComponentFixture<NewBuyPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBuyPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBuyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
