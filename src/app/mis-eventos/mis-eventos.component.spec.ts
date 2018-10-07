/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MisEventosComponent } from './mis-eventos.component';

describe('MisEventosComponent', () => {
  let component: MisEventosComponent;
  let fixture: ComponentFixture<MisEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
