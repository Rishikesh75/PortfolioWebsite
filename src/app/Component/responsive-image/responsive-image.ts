import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-image',
  imports: [CommonModule],
  templateUrl: './responsive-image.html',
  styleUrl: '../../../styles/components/_responsive-image.less'
})
export class ResponsiveImage {
  @Input() src: string = '';
  @Input() alt: string = 'Image';
  @Input() placeholderType: 'profile' | 'skill' | 'project' | 'icon' = 'profile';
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() borderRadius: 'none' | 'small' | 'medium' | 'large' | 'circle' = 'medium';
  
  imageError = false;
  imageLoaded = false;

  onImageError() {
    this.imageError = true;
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  getPlaceholderContent(): string {
    switch (this.placeholderType) {
      case 'profile':
        return 'P';
      case 'skill':
        return 'S';
      case 'project':
        return 'Pr';
      case 'icon':
        return '●';
      default:
        return 'I';
    }
  }

  getPlaceholderClass(): string {
    return `placeholder-${this.placeholderType}`;
  }
}
