import { Component } from '@angular/core';
import { Profilephoto } from "../profilephoto/profilephoto";
import { Button } from '../Component/button/button';
@Component({
  selector: 'app-home',
  imports: [ Profilephoto,Button],
  templateUrl: './home.html',
  styleUrl: './home.less'
})
export class Home {
  onDownloadCV()
  {
    
  }
}
