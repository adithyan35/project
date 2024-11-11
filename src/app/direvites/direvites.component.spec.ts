import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirevitesComponent } from './direvites.component';

describe('DirevitesComponent', () => {
  let component: DirevitesComponent;
  let fixture: ComponentFixture<DirevitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirevitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirevitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
