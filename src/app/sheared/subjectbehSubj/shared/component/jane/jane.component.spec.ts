import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaneComponent } from './jane.component';

describe('JaneComponent', () => {
  let component: JaneComponent;
  let fixture: ComponentFixture<JaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
