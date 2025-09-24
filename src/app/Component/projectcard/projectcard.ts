import { Component, Input } from '@angular/core';
import {SlicePipe} from '@angular/common'
@Component({
  selector: 'app-project-card',
  imports: [SlicePipe],
  templateUrl: './projectcard.html',
  styleUrl: './projectcard.less'
})
export class Projectcard {
  @Input() title = 'Project Title';
@Input() description = 'Short project description goes here. One or two lines.';
@Input() imageUrl = '';
@Input() imageAlt = 'Project screenshot';
@Input() githubUrl = 'dfasfsda';
@Input() liveUrl = '';
}
