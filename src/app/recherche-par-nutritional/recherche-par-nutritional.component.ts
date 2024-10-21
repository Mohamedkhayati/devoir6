import { Component } from '@angular/core';
import { Nutritional } from '../model/nutritional.model';
import { Supplement } from '../model/supplement.model';
import { SupplementService } from '../services/supplement.service';

@Component({
  selector: 'app-recherche-par-nutritional',
  templateUrl: './recherche-par-nutritional.component.html',
  
})
export class RechercheParNutritionalComponent {


supplements : Supplement[] | undefined;
nutritionals : Nutritional[] | undefined;
  IdNutritional: any;
constructor(private supplementService: SupplementService){
  
}
ngOnInit(): void {
  this.nutritionals=this.supplementService.listeNutritionals();
  this.supplements=this.supplementService.listeSupplements();

}
onChange() {
  this.supplements=
  this.supplementService.rechercherParNutritional(this.IdNutritional);
  }
supprimerSupplement(s: Supplement)
  {
 let conf = confirm("Etes-vous sûr ?");
 if (conf)
this.supplementService.supprimerSupplement(s);
  }


}
