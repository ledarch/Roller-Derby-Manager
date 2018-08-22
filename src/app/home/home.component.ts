import { Component, OnInit } from '@angular/core';
import { Title } from './title';

@Component({

  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  breakpoint: number;
  public googleplay = 'assets/img/dl_app_googleplay.png';
  public appstore = 'assets/img/dl_app_appstore.png';
  public homepage = 'assets/img/homepage.jpg';

  constructor(public title: Title) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 4;
  }

}
