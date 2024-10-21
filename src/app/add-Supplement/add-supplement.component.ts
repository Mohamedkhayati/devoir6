import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplementService } from '../services/supplement.service';
import { Supplement } from '../model/supplement.model';
import { Nutritional } from '../model/nutritional.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email-validator'; 

@Component({
  selector: 'app-add-supplement',
  templateUrl: './add-supplement.component.html',
  
})
export class AddSupplementComponent implements OnInit {
  nutritionals!: Nutritional[];
  addSupplementForm!: FormGroup; 

  constructor(
    private router: Router,
    private supplementService: SupplementService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.nutritionals = this.supplementService.listeNutritionals();

  
    this.addSupplementForm = this.fb.group({
      IdSupplement: ['', [Validators.required, Validators.minLength(1)]],
      nomSupplement: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, emailValidator()]], 
      prixSupplement: ['', [Validators.required]],
      dosageSupplement: ['', [Validators.required]],
      dateCreation: ['', [Validators.required]],
      idNut: ['', [Validators.required]] 
    });
  }

  addSupplement() {
    if (this.addSupplementForm.invalid) {
      return;
    }

    const newSupplement = new Supplement();
    newSupplement.nomSupplement = this.addSupplementForm.get('nomSupplement')?.value;
    newSupplement.email = this.addSupplementForm.get('email')?.value;
    newSupplement.prixSupplement = this.addSupplementForm.get('prixSupplement')?.value;
    newSupplement.dosageSupplement = this.addSupplementForm.get('dosageSupplement')?.value;
    newSupplement.dateCreation = this.addSupplementForm.get('dateCreation')?.value;
    newSupplement.nutritional = this.supplementService.consulterNutritional(this.addSupplementForm.get('idNut')?.value);
    this.supplementService.ajouterSupplement(newSupplement);
    this.router.navigate(['supplements']);
  
}
}