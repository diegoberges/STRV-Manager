import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatComponentComponent } from './stat-component.component';

describe('StatComponentComponent', () => {
  let component: StatComponentComponent;
  let fixture: ComponentFixture<StatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
