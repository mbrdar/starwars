import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIfComponent } from './custom-if.component';

describe('CustomIfComponent', () => {
  let component: CustomIfComponent;
  let fixture: ComponentFixture<CustomIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
