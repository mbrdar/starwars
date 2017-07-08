import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBuilderComponent } from './register-builder.component';

describe('RegisterBuilderComponent', () => {
  let component: RegisterBuilderComponent;
  let fixture: ComponentFixture<RegisterBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
