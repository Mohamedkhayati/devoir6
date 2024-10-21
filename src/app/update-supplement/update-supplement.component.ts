import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplementService } from '../services/supplement.service';
import { Supplement } from '../model/supplement.model';
import { Nutritional } from '../model/nutritional.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator'; // Importer le validateur personnalisé

@Component({
  selector: 'app-update-supplement',
  templateUrl: './update-supplement.component.html',
  styleUrls: ['./update-supplement.component.css']
})
export class UpdateSupplementComponent implements OnInit {
  nutritionals!: Nutritional[];
  updatedNutId!: number;
  currentSupplement = new Supplement();
  updateSupplementForm!: FormGroup; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private supplementService: SupplementService,
    private fb: FormBuilder 
  ) { }

  ngOnInit() {
    this.nutritionals = this.supplementService.listeNutritionals();
    this.currentSupplement = this.supplementService.consulterSupplement(this.activatedRoute.snapshot.params['id']);
    this.updatedNutId = this.currentSupplement.nutritional.idNut;

    this.updateSupplementForm = this.fb.group({
      email: [this.currentSupplement.email, [Validators.required, emailValidator()]],
      nomSupplement: [this.currentSupplement.nomSupplement, [Validators.required, Validators.minLength(3)]],
      prixSupplement: [this.currentSupplement.prixSupplement, [Validators.required]],
      dateCreation: [this.currentSupplement.dateCreation, [Validators.required]],
    });
  }


  emailInvalid(): boolean {
    const email = this.updateSupplementForm.get('email')?.value;
    return email && !(email.includes('@') && email.includes('.com'));
  }

  updateSupplement() {
    if (this.updateSupplementForm.invalid) {
      return; 
    }
    this.currentSupplement.nutritional = this.supplementService.consulterNutritional(this.updatedNutId);
    this.currentSupplement.email = this.updateSupplementForm.get('email')?.value; 
    this.supplementService.updateSupplement(this.currentSupplement);
    this.router.navigate(['supplements']);
  }
}
