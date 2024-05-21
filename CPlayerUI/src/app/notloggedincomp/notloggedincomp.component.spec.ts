import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotloggedincompComponent } from './notloggedincomp.component';

describe('NotloggedincompComponent', () => {
  let component: NotloggedincompComponent;
  let fixture: ComponentFixture<NotloggedincompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotloggedincompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotloggedincompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
