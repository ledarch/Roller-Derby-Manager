import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { take, takeUntil } from 'rxjs/operators';
//import { Team } from '../team/team';


interface Team {
  idTeam: string;
  name: string;
}

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'team'.
   */
  selector: 'list_team',  // <team></team>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: ['./list_team.component.css'],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './list_team.component.html'
})
export class ListTeamComponent implements OnInit, OnDestroy, AfterViewInit {

  /** control for the selected team */
  public teamCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public teamFilterCtrl: FormControl = new FormControl();

  /** list of teams */
  private teams: Team[] = [
    { name: 'Team A (Switzerland)', idTeam: 'A' },
    { name: 'Team B (Switzerland)', idTeam: 'B' },
    { name: 'Team C (France)', idTeam: 'C' },
    { name: 'Team D (France)', idTeam: 'D' },
    { name: 'Team E (France)', idTeam: 'E' },
    { name: 'Team F (Italy)', idTeam: 'F' },
    { name: 'Team G (Italy)', idTeam: 'G' },
    { name: 'Team H (Italy)', idTeam: 'H' },
    { name: 'Team I (Italy)', idTeam: 'I' },
    { name: 'Team J (Italy)', idTeam: 'J' },
    { name: 'Team Kolombia (United States of America)', idTeam: 'K' },
    { name: 'Team L (Germany)', idTeam: 'L' },
    { name: 'Team M (Germany)', idTeam: 'M' },
    { name: 'Team N (Germany)', idTeam: 'N' },
    { name: 'Team O (Germany)', idTeam: 'O' },
    { name: 'Team P (Germany)', idTeam: 'P' },
    { name: 'Team Q (Germany)', idTeam: 'Q' },
    { name: 'Team R (Germany)', idTeam: 'R' }
  ];

  /** list of banks filtered by search keyword */
  public filteredTeams: ReplaySubject<Team[]> = new ReplaySubject<Team[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  ngOnInit() {
    // set initial selection
    this.teamCtrl.setValue(this.teams[10]);

    // load the initial bank list
    this.filteredTeams.next(this.teams.slice());

    // listen for search field value changes
    this.teamFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterTeams();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
 * Sets the initial value after the filteredTeams are loaded initially
 */
  private setInitialValue() {
    this.filteredTeams
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: Team, b: Team) => a.idTeam === b.idTeam;
      });
  }

  private filterTeams() {
    if (!this.teams) {
      return;
    }
    // get the search keyword
    let search = this.teamFilterCtrl.value;
    if (!search) {
      this.filteredTeams.next(this.teams.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the teams
    this.filteredTeams.next(
      this.teams.filter(team => team.name.toLowerCase().indexOf(search) > -1)
    );
  }
}
