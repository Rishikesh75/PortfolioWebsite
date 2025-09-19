import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skillcard',
  imports: [],
  templateUrl: './skillcard.html',
  styleUrl: './skillcard.less'
})
export class Skillcard {
@Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() skills: string[] = [];
}
