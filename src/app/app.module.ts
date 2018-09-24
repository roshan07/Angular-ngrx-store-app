import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { HeroState } from './state/hero.state';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      HeroState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
