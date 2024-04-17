import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrainDetailsComponent } from './strain-details.component';

describe('StrainDetailsComponent', () => {
  let component: StrainDetailsComponent;
  let fixture: ComponentFixture<StrainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrainDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
