import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGoodsComponent } from './home-goods.component';

describe('HomeGoodsComponent', () => {
  let component: HomeGoodsComponent;
  let fixture: ComponentFixture<HomeGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
