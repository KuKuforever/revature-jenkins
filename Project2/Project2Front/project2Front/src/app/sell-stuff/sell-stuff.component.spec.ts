import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellStuffComponent } from './sell-stuff.component';

describe('SellStuffComponent', () => {
  let component: SellStuffComponent;
  let fixture: ComponentFixture<SellStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
