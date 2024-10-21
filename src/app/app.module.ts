import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { AddSupplementComponent } from './add-Supplement/add-supplement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateSupplementComponent } from './update-supplement/update-supplement.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParNutritionalComponent } from './recherche-par-nutritional/recherche-par-nutritional.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


@NgModule({
  declarations: [
    AppComponent,
    SupplementsComponent,
    AddSupplementComponent,
    UpdateSupplementComponent,
    RechercheParNutritionalComponent,
    RechercheParNomComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
