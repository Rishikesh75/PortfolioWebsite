import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ResponsiveImage } from '../responsive-image/responsive-image';
import { SocialIcon } from '../social-icon/social-icon'
@Component({
  selector: 'app-project-card',
  imports: [CommonModule, ResponsiveImage, SocialIcon],
  templateUrl: './projectcard.html',
  styleUrl: '../../../styles/components/_projectcard.less'
})
export class Projectcard {
  @Input() title = 'Project Title';
  @Input() description = 'Short project description goes here. One or two lines.';
  @Input() imageUrl = '';
  @Input() imageAlt = 'Project screenshot';
  @Input() githubUrl = '';
  @Input() liveUrl = '';
  @Input() techStack: string[] = [];

  // Show/hide tech stack
  showTechStack = false;

  toggleTechStack() {
    this.showTechStack = !this.showTechStack;
  }
}
