import { Hero } from './../models/hero.model';

export class AddHero {
  static readonly type = '[Hero] Add Hero';

  constructor(public payload: Hero) { }
}

export class RemoveHero {
  static readonly type = '[Hero] Remove Hero';

  constructor(public payload: string) { }
}

