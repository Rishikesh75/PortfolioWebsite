import { Component, Input } from '@angular/core';
import { ResponsiveImage } from '../Component/responsive-image/responsive-image';

@Component({
  selector: 'app-profilephoto',
  imports: [ResponsiveImage],
  templateUrl: './profilephoto.html',
  styleUrl: '../../styles/components/_profilephoto.less'
})
export class Profilephoto {
   @Input() src: string = 'Images/ProfilePhoto.jpg';     // Profile photo URL
  @Input() alt: string = 'Rishikesh'; // Alt text
  @Input() size: number = 50;   // Default size in px
}
