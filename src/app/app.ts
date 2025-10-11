import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { AboutMe } from './about-me/about-me';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Navbar } from './navbar/navbar';
import { Button } from './Component/button/button';
@Component({
  selector: 'app-root',
  imports: [ Home, AboutMe, Projects, Contact, Navbar],
  templateUrl: './app.html',
  styleUrl: '../styles/pages/_app.less'
})
export class App {
  protected readonly title = signal('RishikeshPortfolio');



}
