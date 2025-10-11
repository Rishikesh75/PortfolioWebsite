import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  imports: [],
  templateUrl: './social-icon.html',
  styleUrl: '../../../styles/components/_social-icon.less'
})
export class SocialIcon {
  @Input() type: 'github' | 'linkedin' | 'kaggle' | 'leetcode' = 'github';
  @Input() url: string = '#';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
  getIconClass(): string {
    return `social-icon-${this.type}`;
  }
  
  getSizeClass(): string {
    return `size-${this.size}`;
  }
}
