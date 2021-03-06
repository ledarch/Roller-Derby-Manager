import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Team } from "./team";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeamService {

  public produitUrl = '//localhost:8086';
  public PRODUIT_API = this.produitUrl + '/musynamic/createproduct';

  constructor(private http: HttpClient) { }


  public getTeams(): Observable<any> {
    return this.http.get(this.produitUrl + '/listeprod');
  }

  get(idTeam: string) {
    return this.http.get(this.PRODUIT_API + '/' + idTeam);
  }

  deleteTeam(href: string) {
    return this.http.delete(href);
  }
  save(team: any): Observable<any> {
    let result: Observable<Object>;
    if (team['href']) {
      result = this.http.put(team.href, team);
    } else {
      result = this.http.post(this.PRODUIT_API, team);
    }
    return result;
  }

  createTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.PRODUIT_API, team, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}