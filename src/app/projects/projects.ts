import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.less'
})
export class Projects {

  items = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

scrollLeft(slider: HTMLElement) {
  slider.scrollBy({ left: -200, behavior: 'smooth' });
}

scrollRight(slider: HTMLElement) {
  slider.scrollBy({ left: 200, behavior: 'smooth' });
}

}
