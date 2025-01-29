import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageInformationComponent } from './storage-information.component';

describe('StorageInformationComponent', () => {
  let component: StorageInformationComponent;
  let fixture: ComponentFixture<StorageInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
