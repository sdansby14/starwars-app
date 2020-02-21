import { Component, OnInit } from '@angular/core';
import { Planets } from '../interfaces/Planets';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planets[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.apiService.all('planets').subscribe((response: any) => {
      const allPlanets: Planets[] = response.results;
      this.planets = allPlanets;
    });
  }
}
