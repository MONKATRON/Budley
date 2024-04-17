import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGrowsComponent } from './list-grows.component';

describe('ListGrowsComponent', () => {
  let component: ListGrowsComponent;
  let fixture: ComponentFixture<ListGrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGrowsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListGrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
