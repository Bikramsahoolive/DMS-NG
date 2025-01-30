import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToAreaMappingComponent } from './user-to-area-mapping.component';

describe('UserToAreaMappingComponent', () => {
  let component: UserToAreaMappingComponent;
  let fixture: ComponentFixture<UserToAreaMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserToAreaMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserToAreaMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
