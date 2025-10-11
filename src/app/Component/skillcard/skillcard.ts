import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skillcard',
  imports: [CommonModule],
  templateUrl: './skillcard.html',
  styleUrl: '../../../styles/components/_skillcard.less'
})
export class Skillcard {
  @Input() title: string = '';
  @Input() skills: string[] = [];
}
