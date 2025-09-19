import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skillcard } from './skillcard';

describe('Skillcard', () => {
  let component: Skillcard;
  let fixture: ComponentFixture<Skillcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skillcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skillcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
