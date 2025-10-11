import { Component } from '@angular/core';
import {Skillcard} from '../Component/skillcard/skillcard';
import { SocialIcon } from '../Component/social-icon/social-icon'
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Skillcard, SocialIcon],
  templateUrl: './about-me.html',
  styleUrl: '../../styles/pages/_about-me.less'
})
export class AboutMe {

}
