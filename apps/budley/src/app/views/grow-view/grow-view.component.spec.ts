import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowViewComponent } from './grow-view.component';

describe('GrowViewComponent', () => {
  let component: GrowViewComponent;
  let fixture: ComponentFixture<GrowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
