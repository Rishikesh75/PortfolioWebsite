import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profilephoto',
  imports: [],
  templateUrl: './profilephoto.html',
  styleUrl: './profilephoto.less'
})
export class Profilephoto {
   @Input() src: string = 'Images/ProfilePhoto.jpg';     // Profile photo URL
  @Input() alt: string = 'Rishikesh'; // Alt text
  @Input() size: number = 50;   // Default size in px
}
