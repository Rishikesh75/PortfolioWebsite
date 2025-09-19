import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectcard } from './projectcard';

describe('Projectcard', () => {
  let component: Projectcard;
  let fixture: ComponentFixture<Projectcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projectcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
