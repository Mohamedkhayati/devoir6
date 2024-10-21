import { Component, OnInit } from '@angular/core';
import { Supplement } from '../model/supplement.model';
import { SupplementService } from '../services/supplement.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {

  allSupplements!: Supplement[];
  searchTerm!: string;
  supplements: Supplement[] = [];

  constructor(private supplementService: SupplementService) {}

  ngOnInit(): void {
    // Directly assign the result from the service without subscribing
    this.allSupplements = this.supplementService.listeSupplements();
  }

  rechercherSupps() {
    // Call the method directly to filter supplements
    this.supplements = this.supplementService.rechercherParNom(this.searchTerm);
  }

  onKeyUp(filterText: string) {
    this.supplements = this.allSupplements.filter(item =>
      item.nomSupplement?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
