import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoroprateLoginComponent } from './coroprate-login.component';

describe('CoroprateLoginComponent', () => {
  let component: CoroprateLoginComponent;
  let fixture: ComponentFixture<CoroprateLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoroprateLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoroprateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
