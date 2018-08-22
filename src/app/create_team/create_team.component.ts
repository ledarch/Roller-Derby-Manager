import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../team/team.service';
import { NgForm } from '@angular/forms';
import { Team } from '../team/team';

@Component({
  selector: 'create_team',
  templateUrl: './create_team.component.html'
})
export class CreateTeamComponent {

  team: any = {};
  teams: any[];

  constructor(private router: Router, private teamService: TeamService) { }

  gotoList() {
    this.router.navigate(['/home']);
  }
  /*
    createTeam(): void {
      this.teamService.createTeam(this.team)
        .subscribe(team => this.teams.push(team));
    }
  */
  save(form: NgForm) {
    this.teamService.save(form)
      .subscribe(data => {
        this.gotoList();
      }, error => console.error(error));
  }


}