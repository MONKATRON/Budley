import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowsDashDispComponent } from './grows-dash-disp.component';

describe('GrowsDashDispComponent', () => {
  let component: GrowsDashDispComponent;
  let fixture: ComponentFixture<GrowsDashDispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowsDashDispComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowsDashDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
