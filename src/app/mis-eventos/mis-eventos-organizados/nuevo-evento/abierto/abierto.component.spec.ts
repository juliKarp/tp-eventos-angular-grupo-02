/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbiertoComponent } from './abierto.component';

describe('AbiertoComponent', () => {
  let component: AbiertoComponent;
  let fixture: ComponentFixture<AbiertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
