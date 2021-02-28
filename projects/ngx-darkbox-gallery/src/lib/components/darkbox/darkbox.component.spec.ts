import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkboxComponent } from './darkbox.component';

describe('DarkboxComponent', () => {
  let component: DarkboxComponent;
  let fixture: ComponentFixture<DarkboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
