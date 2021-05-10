import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { LaunchSearchComponent } from './launch-search/launch-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleSearchComponent } from './people-search/people-search.component';

@NgModule({
  declarations: [AppComponent, LaunchSearchComponent, NavbarComponent, PeopleSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
