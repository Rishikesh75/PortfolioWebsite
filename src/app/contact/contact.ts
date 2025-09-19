import { Component } from '@angular/core';
import {TextBox} from '../Component/text-box/text-box';
import {SingleLineTextInput} from '../Component/single-line-text-input/single-line-text-input';
import {Button} from '../Component/button/button'
@Component({
  selector: 'app-contact',
  imports: [TextBox,SingleLineTextInput,Button],
  templateUrl: './contact.html',
  styleUrl: './contact.less'
})
export class Contact {

}
