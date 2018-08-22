import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture,
  getTestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

/**
 * Load the implementations that should be tested.
 */
import { AppState } from '../app.service';
import { ListTeamComponent } from './list_team.component';

describe(`Team`, () => {
  let comp: ListTeamComponent;
  let fixture: ComponentFixture<ListTeamComponent>;
  let injector: TestBed;
  let service: AppState;
  let httpMock: HttpTestingController;

  /**
   * async beforeEach.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListTeamComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [AppState]
    })

      /**
       * Compile template and css.
       */
      .compileComponents();
    injector = getTestBed();
    service = injector.get(AppState);
    httpMock = injector.get(HttpTestingController);
  }));

  /**
   * Synchronous beforeEach.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeamComponent);
    comp = fixture.componentInstance;

    /**
     * Trigger initial data binding.
     */
    fixture.detectChanges();
  });
  /** 
  it('should have default data', () => {
    expect(comp.localState).toEqual({ value: '' });
  });
  */

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});
