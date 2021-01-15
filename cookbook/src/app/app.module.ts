import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BakingComponent, FilterBakingNames} from './baking/baking.component';
import { ContactComponent } from './contact/contact.component';
import {CookingComponent, FilterNames} from './cooking/cooking.component';
import {DessertComponent, FilterDessertNames} from './dessert/dessert.component';
import { HomeComponent } from './home/home.component';
import { RecipeDialogComponent } from './recipe-dialog/recipe-dialog.component';
import {FilterNamesStarter, StarterComponent} from './starter/starter.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BakingComponent,
    ContactComponent,
    CookingComponent,
    DessertComponent,
    HomeComponent,
    RecipeDialogComponent,
    StarterComponent,
    FilterBakingNames,
    FilterNames,
    FilterDessertNames,
    FilterNamesStarter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  entryComponents: [RecipeDialogComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
