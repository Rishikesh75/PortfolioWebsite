import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveImage } from '../responsive-image/responsive-image';
@Component({
  selector: 'app-skillcard',
  imports: [CommonModule, ResponsiveImage],
  templateUrl: './skillcard.html',
  styleUrl: '../../../styles/components/_skillcard.less'
})
export class Skillcard {
@Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() skills: string[] = [];
}
