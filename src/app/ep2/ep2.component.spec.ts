import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep2Component } from './ep2.component';

describe('Ep2Component', () => {
  let component: Ep2Component;
  let fixture: ComponentFixture<Ep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
