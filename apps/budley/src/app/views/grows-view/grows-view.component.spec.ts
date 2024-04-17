import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowsViewComponent } from './grows-view.component';

describe('GrowsViewComponent', () => {
  let component: GrowsViewComponent;
  let fixture: ComponentFixture<GrowsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
