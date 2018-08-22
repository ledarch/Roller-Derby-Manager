import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  breakpoint: number;
  public logo = 'assets/icon/facebook.png';
  public facebook = 'https://www.facebook.com/Le.Darch';
  public googleplay = 'assets/img/dl_app_googleplay.png';
  public appstore = 'assets/img/dl_app_appstore.png';

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }



}
