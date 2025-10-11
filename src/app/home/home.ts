import { Component } from '@angular/core';
import { Button } from '../Component/button/button';
@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: '../../styles/pages/_home.less'
})
export class Home {
  onDownloadCV()
  {
    
  }
}
