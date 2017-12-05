import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyStuffComponent } from './buy-stuff.component';

describe('BuyStuffComponent', () => {
  let component: BuyStuffComponent;
  let fixture: ComponentFixture<BuyStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
