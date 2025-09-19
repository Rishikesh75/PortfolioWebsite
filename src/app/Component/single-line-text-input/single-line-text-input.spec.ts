import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLineTextInput } from './single-line-text-input';

describe('SingleLineTextInput', () => {
  let component: SingleLineTextInput;
  let fixture: ComponentFixture<SingleLineTextInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleLineTextInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLineTextInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
