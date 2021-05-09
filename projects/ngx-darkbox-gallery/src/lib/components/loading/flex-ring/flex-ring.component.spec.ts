import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexRingComponent } from './flex-ring.component';

describe('FlexRingComponent', () => {
  let component: FlexRingComponent;
  let fixture: ComponentFixture<FlexRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexRingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
