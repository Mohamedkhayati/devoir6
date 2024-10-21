import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplementsComponent } from './supplements/supplements.component';
import { AddSupplementComponent } from './add-Supplement/add-supplement.component';
import { UpdateSupplementComponent } from './update-supplement/update-supplement.component';
import { RechercheParNutritionalComponent} from './recherche-par-nutritional/recherche-par-nutritional.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [
  {path: "supplements", component : SupplementsComponent},
  {path: "add-supplement", component : AddSupplementComponent},
  {path: "updateSupplement/:id", component: UpdateSupplementComponent},
  { path: "", redirectTo: "supplements", pathMatch: "full" },
  {path: "rechercheParNutritional", component : RechercheParNutritionalComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},


  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
