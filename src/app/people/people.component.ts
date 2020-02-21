import { Component, OnInit } from '@angular/core';
import { People } from '../interfaces/People';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: People[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.apiService.all('people').subscribe((response: any) => {
      const allPeople: People[] = response.results;
      this.people = allPeople;
    });
  }
}
