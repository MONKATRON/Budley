import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowWizzardComponent } from './grow-wizzard.component';

describe('GrowWizzardComponent', () => {
  let component: GrowWizzardComponent;
  let fixture: ComponentFixture<GrowWizzardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowWizzardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowWizzardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
