import { Injectable } from '@angular/core';
import { Supplement } from '../model/supplement.model';
import { Nutritional } from '../model/nutritional.model';


@Injectable({
  providedIn: 'root'
  })
  
export class SupplementService {



  supplements : Supplement[];
  supplement! : Supplement;
  nutritionals: { idNut: number; nomNut: string; }[];
  supplementsRecherche!: Supplement[];
 //un tableau de chînes de caractères
 constructor() {
  this.nutritionals = [
    { idNut: 1, nomNut: "Creatine" },
    { idNut: 2, nomNut: "Protein" },
    { idNut: 3, nomNut: "Masse" },
    { idNut: 4, nomNut: "Vitamen" },
    { idNut: 5, nomNut: "Pre-workout" }
  ];

  this.supplements = [
    { idSupplement: 1, nomSupplement: "Creatine Monohydrate", prixSupplement: 120, dosageSupplement: 5,
      dateCreation: new Date("1990-01-14"), nutritional: { idNut: 1, nomNut: "Creatine" } },
    { idSupplement: 2, nomSupplement: "Creatine HCL", prixSupplement: 150, dosageSupplement: 2,
      dateCreation: new Date("2010-12-17"), nutritional: { idNut: 2, nomNut: "Protein" } },
    { idSupplement: 3, nomSupplement: "Whey Protein Isolate", prixSupplement: 200, dosageSupplement: 30,
      dateCreation: new Date("1970-02-20"), nutritional: { idNut: 2, nomNut: "Protein" } }
  ];
}

   listeSupplements():Supplement[] {
    return this.supplements;
}
ajouterSupplement( supplement: Supplement){
  this.supplements.push(supplement);
  }
supprimerSupplement( supp: Supplement){
    //supprimer le produit prod du tableau produits
    const index = this.supplements.indexOf(supp, 0);
    if (index > -1) {
    this.supplements.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }
    consulterSupplement(id:number): Supplement{
      this.supplement = this.supplements.find(p => p.idSupplement == id)!;
      return this.supplement;
      }
      
      trierSupplements(){
        this.supplements = this.supplements.sort((n1,n2) => {
        if (n1.idSupplement! > n2.idSupplement!) {
        return 1;
        }
        if (n1.idSupplement! < n2.idSupplement!) {
        return -1;
        }
        return 0;
        });
        }
        updateSupplement(s:Supplement)
        {
        // console.log(p);
        this.supprimerSupplement(s);
        this.ajouterSupplement(s);
        this.trierSupplements();
        }
listeNutritionals():Nutritional[] {
    return this.nutritionals;
          }   
  consulterNutritional(id:number): Nutritional{
            return this.nutritionals.find(cat => cat.idNut == id)!;
            }
rechercherParNutritional(idNut: number): Supplement[]{
this.supplementsRecherche = []
this.supplements.forEach((cur, index) => {
  if(idNut == cur.nutritional.idNut) {
    console.log("cur "+cur);
    this.supplementsRecherche.push(cur);
    }
  });
  return this.supplementsRecherche;
              }

              rechercherParNom(nom: string): Supplement[] {
                return this.supplements.filter(supp => 
                  supp.nomSupplement && supp.nomSupplement.toLowerCase().includes(nom.toLowerCase())
                );
              }
              


}
