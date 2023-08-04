import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebComponent } from './feb.component';

describe('FebComponent', () => {
  let component: FebComponent;
  let fixture: ComponentFixture<FebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
