import { Component } from '@angular/core';
import { Button } from '../Component/button/button';
import { Profilephoto } from '../profilephoto/profilephoto';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button, Profilephoto],
  templateUrl: './home.html',
  styleUrl: '../../styles/pages/_home.less'
})
export class Home {
  onDownloadCV()
  {
    
  }
}
