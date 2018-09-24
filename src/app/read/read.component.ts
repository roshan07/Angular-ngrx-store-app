import { Component, OnInit } from '@angular/core';
import { RemoveHero } from './../actions/hero.action';
import { HeroState } from './../state/hero.state';
import { Hero } from './../models/hero.model';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  // $heroes: Observable<Hero>;
  @Select(HeroState.getHeroes) $heroes: Observable<Hero>;

  constructor(private store: Store) {
    //  this.$heroes = this.store.select(state => state.heroes.heroes);
  }

  deleteHero(name) {
    this.store.dispatch(new RemoveHero(name));
  }

  ngOnInit() {
  }

}
