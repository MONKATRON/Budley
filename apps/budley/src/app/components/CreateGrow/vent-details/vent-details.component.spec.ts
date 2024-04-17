import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentDetailsComponent } from './vent-details.component';

describe('VentDetailsComponent', () => {
  let component: VentDetailsComponent;
  let fixture: ComponentFixture<VentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
