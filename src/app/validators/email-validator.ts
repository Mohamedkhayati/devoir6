import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email = control.value;
    const hasAtSymbol = email && email.includes('@');
    const hasDotCom = email && email.endsWith('.com');
    const isValidLength = email && email.length >= 10;

    // Vérifier si l'email contient '@', se termine par '.com' et a une longueur d'au moins 10 caractères
    const valid = hasAtSymbol && hasDotCom && isValidLength;

    return valid ? null : { invalidEmail: { value: email } };
  };
}
