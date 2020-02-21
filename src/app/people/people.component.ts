import { Component, OnInit } from '@angular/core';
import { People } from '../interfaces/People';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: People[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.all().subscribe((response: any) => {
      const allPeople: People[] = response.results;
      this.people = allPeople;
    });
  }
}
