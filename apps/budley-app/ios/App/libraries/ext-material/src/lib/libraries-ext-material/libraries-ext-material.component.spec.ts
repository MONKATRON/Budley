import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrariesExtMaterialComponent } from './libraries-ext-material.component';

describe('LibrariesExtMaterialComponent', () => {
  let component: LibrariesExtMaterialComponent;
  let fixture: ComponentFixture<LibrariesExtMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariesExtMaterialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibrariesExtMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
