import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { LaunchSearchComponent } from './components/launch-search/launch-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeopleSearchComponent } from './components/people-search/people-search.component';
import { FieldColoredDirective } from './directives/field-colored.directive';
import { NewLaunchComponent } from './components/new-launch/new-launch.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    LaunchSearchComponent,
    NavbarComponent,
    PeopleSearchComponent,
    FieldColoredDirective,
    NewLaunchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    InputTextareaModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
