import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardContentComponent } from './admin-dashboard-content.component';

describe('AdminDashboardContentComponent', () => {
  let component: AdminDashboardContentComponent;
  let fixture: ComponentFixture<AdminDashboardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
