import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrentalPage } from './editrental.page';

describe('EditrentalPage', () => {
  let component: EditrentalPage;
  let fixture: ComponentFixture<EditrentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
