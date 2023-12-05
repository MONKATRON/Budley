import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewGrowDialogComponent } from './new-grow-dialog.component';

describe('NewGrowDialogComponent', () => {
  let component: NewGrowDialogComponent;
  let fixture: ComponentFixture<NewGrowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGrowDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewGrowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
