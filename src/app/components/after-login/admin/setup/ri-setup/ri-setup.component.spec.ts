import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiSetupComponent } from './ri-setup.component';

describe('RiSetupComponent', () => {
  let component: RiSetupComponent;
  let fixture: ComponentFixture<RiSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
