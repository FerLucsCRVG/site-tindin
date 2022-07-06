import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTindinComponent } from './login-tindin.component';

describe('LoginTindinComponent', () => {
  let component: LoginTindinComponent;
  let fixture: ComponentFixture<LoginTindinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTindinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTindinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
