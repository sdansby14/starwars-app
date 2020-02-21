import { Component, OnInit } from '@angular/core';
import { Planets } from '../interfaces/Planets';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planets[];

  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    this.planetsService.all().subscribe((response: any) => {
      const allPlanets: Planets[] = response.results;
      this.planets = allPlanets;
    });
  }
}
