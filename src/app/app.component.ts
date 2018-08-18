/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

export const ROOT_SELECTOR = 'app';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <div style="height: 100vh;"> 
  <mat-toolbar color="primary">
    <div fxShow="true" fxHide.gt-sm="true">
      <button mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
    </div>

    <a mat-button class="companyName" routerLink="/">
      <span>Roller Derby Manager</span>
    </a>
    <span class="example-spacer"></span>
    <div fxShow="true" fxHide.lt-md="true">
      <a mat-button routerLink="/accueil">Accueil</a>
      <a mat-button routerLink="/equipes">Equipes</a>
      <a mat-button routerLink="/contact">Aide et contact</a>
    </div>
    <span class="login"></span>
    <div fxShow="true" fxHide.lt-md="true">
      <button mat-stroked-button>Se connecter</button>
    </div>
  </mat-toolbar>
  <mat-sidenav-container fxFlexFill class="example-container">
    <mat-sidenav color="primary" #sidenav fxLayout="column" mode="over"  opened="false" fxHide.gt-sm="true">
      <div fxLayout="column">
        <a mat-button routerLink="/accueil">Accueil</a>
        <a mat-button routerLink="/equipes">Equipes</a>
        <a mat-button routerLink="/contact">Aide et contact</a>
        <a mat-button routerLink="/equipes">se connecter</a>      
      </div>
    </mat-sidenav>
  </mat-sidenav-container>
</div>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <p>A propos de Roller Derby Manager</p>
      <span>copyright by Sangle au cou</span>
      <span>Roller Derby Manager by Sangle au cou<a [href]="facebook"> https://www.facebook.com/Le.Darch</a></span>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public name = 'Roller derby manager';
  //public tipe = 'assets/img/tipe.png';
  //public twitter = 'https://twitter.com/gdi2290';
  // public url = 'https://tipe.io';
  //public showDevModule: boolean = environment.showDevModule;

  constructor(
    public appState: AppState
  ) { }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
