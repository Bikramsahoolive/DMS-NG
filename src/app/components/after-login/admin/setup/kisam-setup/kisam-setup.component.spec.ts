import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisamSetupComponent } from './kisam-setup.component';

describe('KisamSetupComponent', () => {
  let component: KisamSetupComponent;
  let fixture: ComponentFixture<KisamSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KisamSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KisamSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
