/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MisEventosOrganizadosComponent } from './mis-eventos-organizados.component';

describe('MisEventosOrganizadosComponent', () => {
  let component: MisEventosOrganizadosComponent;
  let fixture: ComponentFixture<MisEventosOrganizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisEventosOrganizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEventosOrganizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
