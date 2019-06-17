import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Person } from '../persons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular-way',
  templateUrl: './angular-way.component.html',
  styleUrls: ['./angular-way.component.css']
})
export class AngularWayComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  dtTrigger: Subject<Person> = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.http.get('./assets/data/data.json').pipe(
      map(res => res['data'])
    ).subscribe(persons => {
      this.persons = persons;
      this.dtTrigger.next();
    });

  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    const anotherBody = JSON.parse(JSON.stringify(body));
    return anotherBody.data || {};
  }

}
