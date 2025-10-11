import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profilephoto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profilephoto.html',
  styleUrl: '../../styles/components/_profilephoto.less'
})
export class Profilephoto {
  @Input() src: string = '';     // Fallback/default image URL
  @Input() alt: string = 'Rishikesh Reddy'; // Alt text
  @Input() size: number = 50;   // Default size in px
  
  // Responsive image sources
  @Input() mobileXsSrc: string = '/Images/mobile/ProfilePhoto-xs.jpg';
  @Input() mobileSrc: string = '/Images/mobile/ProfilePhoto-mobile.jpg';
  @Input() tabletSrc: string = '/Images/tablet/ProfilePhoto-tablet.jpg';
  @Input() desktopMediumSrc: string = '/Images/desktop/ProfilePhoto-medium.jpg';
  @Input() desktopLargeSrc: string = '/Images/desktop/ProfilePhoto-large.jpg';
  @Input() desktopXlSrc: string = '/Images/desktop/ProfilePhoto-xl.jpg';
  
  // Enable/disable responsive behavior
  @Input() useResponsive: boolean = true;
}
