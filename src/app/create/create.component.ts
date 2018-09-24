import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddHero } from './../actions/hero.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  addHero(name, url) {
    this.store.dispatch(new AddHero({ name: name, url: url }));
  }

  ngOnInit() {
  }

}
