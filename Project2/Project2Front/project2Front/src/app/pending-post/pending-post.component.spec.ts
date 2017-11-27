import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPostComponent } from './pending-post.component';

describe('PendingPostComponent', () => {
  let component: PendingPostComponent;
  let fixture: ComponentFixture<PendingPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
