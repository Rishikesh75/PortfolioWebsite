import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: '../../../styles/components/_button.less'
})
export class Button {
@Input() text: string = 'Click Me';
 @Output() clicked = new EventEmitter<void>();

  onClick() {
      this.clicked.emit();
  }
}
