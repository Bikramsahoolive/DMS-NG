import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahasilSetupComponent } from './tahasil-setup.component';

describe('TahasilSetupComponent', () => {
  let component: TahasilSetupComponent;
  let fixture: ComponentFixture<TahasilSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TahasilSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TahasilSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
