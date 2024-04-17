import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightDetailsComponent } from './light-details.component';

describe('LightDetailsComponent', () => {
  let component: LightDetailsComponent;
  let fixture: ComponentFixture<LightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
