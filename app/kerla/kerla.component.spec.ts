import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerlaComponent } from './kerla.component';

describe('KerlaComponent', () => {
  let component: KerlaComponent;
  let fixture: ComponentFixture<KerlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KerlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KerlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
