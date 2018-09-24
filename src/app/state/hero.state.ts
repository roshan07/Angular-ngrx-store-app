import { AddHero, RemoveHero } from './../actions/hero.action';
import { Hero } from './../models/hero.model';
import { State, Action, StateContext, Selector } from '@ngxs/store';

export class HeroStateModel {
  heroes: Hero[];
}

@State<HeroStateModel>({
  name: 'heroes',
  defaults: {
    heroes: []
  }
})

export class HeroState {

  @Selector()
  static getHeroes(state: HeroStateModel) {
    return state.heroes;
  }

  @Action(AddHero)
  add({ getState, patchState }: StateContext<HeroStateModel>, { payload }: AddHero) {
    const state = getState();
    patchState({
      heroes: [...state.heroes, payload]
    });
  }

  @Action(RemoveHero)
  remove({ getState, patchState }: StateContext<HeroStateModel>, { payload }: RemoveHero) {
    patchState({
      heroes: getState().heroes.filter(a => a.name !== payload)
    });
  }

}
