import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Title {

  public title = 'Améliore la gestion de ton club et de ton équipe de roller derby';

  constructor(
    public http: HttpClient
  ) { }
}
