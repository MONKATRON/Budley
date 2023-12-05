import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtMaterialComponent } from './ext-material.component';

describe('ExtMaterialComponent', () => {
  let component: ExtMaterialComponent;
  let fixture: ComponentFixture<ExtMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtMaterialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
