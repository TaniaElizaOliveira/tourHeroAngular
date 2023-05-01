import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interface/Hero';
import { HeroService } from 'src/app/services/hero.service';



@Component({
  selector: 'app-top-hero',
  templateUrl: './top-hero.component.html',
  styleUrls: ['./top-hero.component.css']
})
export class TopHeroComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes=>this.heroes=heroes.slice(1,5))
  }

}
