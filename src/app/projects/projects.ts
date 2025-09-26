import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Projectcard} from '../Component/projectcard/projectcard'
@Component({
  selector: 'app-projects',
  imports: [CommonModule,Projectcard],
  templateUrl: './projects.html',
  styleUrl: './projects.less'
})
export class Projects {


  fullStackProjects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular.',
      imageUrl: 'assets/portfolio.png',
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://yourportfolio.com'
    },
    // Add more full stack projects here
  ];

  aiMlProjects = [
    {
      title: 'AI/ML Project',
      description: 'An AI/ML project example.',
      imageUrl: 'assets/ai-ml.png',
      githubUrl: 'https://github.com/username/ai-ml-project',
      liveUrl: 'https://youraimlproject.com'
    },
    // Add more AI/ML projects here
  ];

  scrollLeft(slider: HTMLElement) {
    slider.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight(slider: HTMLElement) {
    slider.scrollBy({ left: 200, behavior: 'smooth' });
  }

}
